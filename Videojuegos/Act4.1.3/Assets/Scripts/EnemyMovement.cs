using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    int rightOrLeftMove; //Randomizes whether the enemy moves to the left or right

    // Start is called before the first frame update
    void Start()
    {
        float movementSpeed = Random.Range(0.1f, 1); //Used to determine how often (in seconds) the enemy moves one unit on the x axis
        rightOrLeftMove = Random.Range(0, 2);

        if (rightOrLeftMove == 0){ //Moves to the right
            InvokeRepeating("Move", 0f, movementSpeed);
        }
        else{ //Moves to the left
            InvokeRepeating("MoveLeft", 0f, movementSpeed);
        }
    }

    private void OnTriggerEnter(Collider other) {
        if (other.tag == "Player")
        {
            Destroy(this.gameObject);
        }
    }

    // Update is called once per frame
    void Update()
    {   
        
    }

    void Move(){ 
        transform.position += new Vector3(1f, 0f, 0f); //Skips the enemy GameObject 1 unit to the right

        if (transform.position.x > 5f && rightOrLeftMove == 0){ //Teleports the enemy to the left when if hits the rightmost point of the play space
            transform.position = new Vector3(-5f, transform.position.y, 0f);
        }
    }

    void MoveLeft(){ 
        transform.position += new Vector3(-1f, 0f, 0f); //Skips the enemy GameObject 1 unit to the left

        if(transform.position.x < -5f && rightOrLeftMove == 1){ //Teleports the enemy to the right when if hits the leftmost point of the play space
            transform.position = new Vector3(5f, transform.position.y, 0f);
        }
    }
}
