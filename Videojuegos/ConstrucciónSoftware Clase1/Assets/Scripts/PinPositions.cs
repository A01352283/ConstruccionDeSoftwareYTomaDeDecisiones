using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PinPositions : MonoBehaviour
{

    [SerializeField] GameObject pinPrefab;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] GameObject holePrefab;


    float holePos = -8.85f;

    
    // Start is called before the first frame update
    void Start()
    {   
        //Instantiate balls
        for (int i = 0; i < 20; i++)
        {
            Instantiate(ballPrefab, new Vector3(Random.Range(-7.0f, 7.0f), 4.5f, 0f), Quaternion.identity);
        }

        for (int i = 0; i < 50; i++){

            Instantiate(pinPrefab, new Vector3(Random.Range(-8, 8), Random.Range(-3, 4), 0f), Quaternion.Euler(0f, 0f, 45f));
        }

        while (holePos < 10)
        {
            Instantiate(holePrefab, new Vector3(holePos, -5f, 0f), Quaternion.Euler(0f, 0f, 45f));
            holePos += 1.45f;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
