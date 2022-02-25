using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallPositions : MonoBehaviour
{

    Vector3 pos;
    // Start is called before the first frame update
    void Start()
    {
        pos = new Vector3(Random.Range(-7.0f, 7.0f), 4f, 0f);
        transform.position = pos;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
