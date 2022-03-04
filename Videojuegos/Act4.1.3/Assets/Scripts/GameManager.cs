using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class GameManager : MonoBehaviour
{
    [SerializeField] GameObject enemyPrefab;
    
    // Start is called before the first frame update
    void Start()
    {   
        //Spawns the enemies
        for (int i = 0; i < 100; i++)
        {
            if (Random.Range(0, 101) < 70) //70% chance to spawn enemies on each position
            {
                    Instantiate(enemyPrefab, new Vector3(0f, i, 0f), Quaternion.Euler(0f, 0f, 45f));
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
