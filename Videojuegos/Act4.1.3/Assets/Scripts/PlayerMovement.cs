using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] float interpolationPoint = 1;

    //Used to move the main camera
    [SerializeField] Camera mainCamera;
    [SerializeField] float xPosition, yPosition, zPosition; 
    [SerializeField] float xRotation, yRotation, zRotation; 
    [SerializeField] float smoothSpeed;
    bool is3D = false; //Checks whether the perspective is 2D or 3D

    //Game score
    int score = 100; //Tracks the total game score
    [SerializeField] Text scoreText;


    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        PlayerMove();
    }

    void OnTriggerEnter(Collider other) {
        Vector3 targetPos = new Vector3(xPosition, transform.position.y - yPosition, zPosition);

        if (other.tag == "Checkpoint")
        {
            //Changes the camera angle to the 3D one
            is3D = true;
            mainCamera.orthographic = false;
            StartCoroutine(LerpRotationCamera(Quaternion.Euler(xRotation, yRotation, zRotation), smoothSpeed));
            StartCoroutine(LerpPositionCamera(targetPos, smoothSpeed));
            score += 50;
            scoreText.text = "Score: " + score.ToString();
        }
        
        if(other.tag == "Enemy"){
            score--;
            scoreText.text = "Score: " + score.ToString();
        }
    }

    IEnumerator LerpRotationCamera(Quaternion endValue, float duration){
        float time = 0;
        Quaternion startValue = mainCamera.transform.rotation;
        while (time < duration)
        {
            mainCamera.transform.rotation = Quaternion.Lerp(startValue, endValue, time / duration);
            time += Time.deltaTime;
            yield return null;
        }
        mainCamera.transform.rotation = endValue;
    }

    IEnumerator LerpPositionCamera(Vector3 targetPosition, float duration)
    {
        float time = 0;
        Vector3 startPosition = mainCamera.transform.position;
        while (time < duration)
        {
            mainCamera.transform.position = Vector3.Lerp(startPosition, targetPosition, time / duration);
            time += Time.deltaTime;
            yield return null;
        }
        mainCamera.transform.position = targetPosition;
    }

    void PlayerMove(){
        //4 way movement
        if (Input.GetKeyDown(KeyCode.UpArrow)){
            transform.position += Vector3.Lerp(transform.position, new Vector3(0f, 1f,0f), interpolationPoint);
        }
        else if(Input.GetKeyDown(KeyCode.DownArrow) && transform.position.y >= -3f){
            transform.position += Vector3.Lerp(transform.position, new Vector3(0f, -1f,0f), interpolationPoint);
        }
        else if(Input.GetKeyDown(KeyCode.RightArrow) && transform.position.x < 5f){
            transform.position += Vector3.Lerp(transform.position, new Vector3(1f, 0f,0f), interpolationPoint);
        }
        else if(Input.GetKeyDown(KeyCode.LeftArrow) && transform.position.x > -5f){
            transform.position += Vector3.Lerp(transform.position, new Vector3(-1f, 0f,0f), interpolationPoint);
        }
        MoveCamera();
    }

    void MoveCamera(){
        if (is3D == false) //2D follow perspective
        {
            mainCamera.transform.position = new Vector3(0f, transform.position.y + 3f, -10f);            
        }
        else{ //3D follow perspective
            mainCamera.transform.position = new Vector3(xPosition, transform.position.y - yPosition, zPosition);
            //mainCamera.transform.rotation = Quaternion.Euler(xRotation, yRotation, zRotation);
        }
    }
}
