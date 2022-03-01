function main(){
    console.log("Hello World!");
    
    //Ej 1
    document.write("Ej 1: Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite (funciona case sensitive).");
    
    ej1Tests = ["abacddbec", "abacddbeEcfghi", "abacddbEecfghi", "aabbcc", "2123"]
    for (let index = 0; index < ej1Tests.length; index++) {
        FirstNonRepeat(ej1Tests[index]);  
    }

    //Ej 2
    document.write("<br><br><br>Ej 2: Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.")

    ej2Tests = [ [9,8,7,6,5,4,3,2,1], [5,1,2,4,3], [6,4,2,1,5,3,3,2,10], [5,4,3,2,1] ];

    for (let i = 0; i < ej2Tests.length; i++) {
        BubbleSort(ej2Tests[i]);
    }

    //Ej 3
    document.write("<br><br><br>Escribe una función que implemente el algoritmo 'merge-sort' para ordenar una lista de números.")
    
    ej3Tests = [ [9,8,7,6,5,4,3,2,1], [5,1,2,4,3], [6,4,2,1,5,3,3,2,10], [5,4,3,2,1] ];
    
    for (let i = 0; i < ej3Tests.length; i++) {
        MergeSort(ej3Tests[i]);
    }

    //Ej 4

    
    //Ej 5


    //Ej 6


    //Ej 7


    //Ej 8


    //Ej 9


    //Ej 10


}

//----Auxiliary functions----//

//Auxiliary function to add check the first non repeated letter of a string
function FirstNonRepeat(textToCheck) {
    let firstNonRepeatedChar; //Stores the first non repeated character in the string
    document.write("<br><br>Prueba: ", textToCheck);
    
    let charMap = new Map();
    //Iterates through every character of the string
    for (let character of textToCheck) {
        if (charMap.has(character)) { //If the character exists in the map
            charMap.set(character, charMap.get(character)+1);
        }
        else{//If the character doesn't exist in the map

            charMap.set(character, 1);
        }
    }

    //Checks for the first character that appears only once in the map
    for (const charInMap of charMap.entries()) {
        if(charInMap[1] == 1){
            firstNonRepeatedChar = charInMap[0];
            break;
        }
    }

    firstNonRepeatedChar == null ? document.write("<br>Resultado: No char in the string is non repeated") : document.write("<br>Resultado: ", firstNonRepeatedChar);
}

//Auxiliary swap function for the bubble sort
function Swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Bubble sort
function BubbleSort(numList) {
    document.write("<br><br>List to sort: ", numList);

    for (let i = 0; i < numList.length - 1; i++) {
        for (let j = 0; j < numList.length - i - 1; j++) {
            if (numList[j] > numList[j+1]) {
                Swap(numList, j, j+1);
            }
        }
    }

    document.write("<br>Sorted list: ", numList);
}

function MergeSort(numList){
    
}