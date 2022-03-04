function main(){
    //Ej 1
;    document.write("<b>Ej 1: Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite (funciona case sensitive)</b>.");

    let ej1Tests = ["abacddbec", "abacddbeEcfghi", "abacddbEecfghi", "aabbcc", "2123"]
    for (let index = 0; index < ej1Tests.length; index++) {
        FirstNonRepeat(ej1Tests[index]);  
    }

    //Ej 2
    document.write("<br><br><br><b>Ej 2: Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.</b>")

    let ej2Tests = [ [9,8,7,6,5,4,3,2,1], [5,1,2,4,3], [6,4,2,1,5,3,3,2,10], [5,4,3,2,1] ];

    for (let i = 0; i < ej2Tests.length; i++) {
        BubbleSort(ej2Tests[i]);
    }

    //Ej 3
    document.write("<br><br><br><b>Ej 3:Escribe una función que implemente el algoritmo 'merge-sort' para ordenar una lista de números.</b>")
    
    let ej3Tests = [ [9,8,7,6,5,4,3,2,1], [5,1,2,4,3], [6,4,2,1,5,3,3,2,10], [5,4,3,2,1] ];
    
    for (let i = 0; i < ej3Tests.length; i++) {
        document.write("<br><br>Array before sort: ", ej3Tests[i]);
        
        let arrLen = ej3Tests[i].length;
        MergeSort(ej3Tests[i], 0, arrLen - 1);
        
        document.write("<br>Array after sort: ", ej3Tests[i]);
    }

    //Ej 4
    document.write("<br><br><br><b>Ej 4: Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse '</b>")
    
    let ej4Tests = [ [9,8,7,6,5,4,3,2,1], [5,4,3,2,1], [1,2,3,4,5] ];
    
    for (let i = 0; i < ej4Tests.length; i++) {
        //Primera función
        document.write("<br>Copia en reversa: ", ReverseArray(ej4Tests[i])); //Returns the copy
        
        //Segunda función
        document.write("<br>Funcion 2, array original: ", ej4Tests[i]);
        ReverseOriginalArray(ej4Tests[i]); //Modifies the original
        document.write("<br>Array original modificado: ", ej4Tests[i]);
    }

    
    //Ej 5
    document.write("<br><br><br><b>Ej 5: Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.</b>");

    let ej5Vect1 = new Vector(1, 2, 3);
    let ej5Vect2 = new Vector(2, 2, 2);
    
    //Muestra los vectores
    document.write("<br>Vector 1: ");
    ej5Vect1.Print();
    document.write("<br>Vector 2: ");
    ej5Vect2.Print();

    //Suma
    document.write("<br><br>Vector1 + Vector 2: ")
    ej5Vect1.Sum(ej5Vect2);
    ej5Vect1.Print();

    //Resta
    document.write("<br><br>Vector 1 - Vector 2: ")
    ej5Vect1.Substract(ej5Vect2);
    ej5Vect1.Print();

    //Magnitude
    document.write("<br><br>Magnitud del vector 1: ", ej5Vect1.GetMagnitude());

    //Unit vector
    let ej5Vect1Unit = ej5Vect1.GetUnitVector();
    document.write("<br><br>Vector unitario: ");
    ej5Vect1Unit.Print();

    //Multiply by scalar
    ej5Vect1.MultiplyByScalar(10);
    document.write("<br><br>Multiplying Vector1 * 10: ");
    ej5Vect1.Print();

    //Ej 6
    document.write("<br><br><br><b>Ej 6: Escribe una función que calcule el máximo común divisor de dos números.</b>");

    let ej6Tests = [ [56, 42], [20, 100], [23, 44]];

    for (let i = 0; i < ej6Tests.length; i++) {
        MaximoComunDivisor(ej6Tests[i][0], ej6Tests[i][1]);
    }

    //Ej 7
    document.write("<br><br><br><b>Ej 7: Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.</b>");

    let ej7Tests = [ [new Vector(1, 2, 0), new Vector(2, -1, 10)], [new Vector(2, 3, 1), new Vector(3, 1, -9)], [new Vector(1, 2, 3), new Vector(4, 5, 6)] ]

    for (let i = 0; i < ej7Tests.length; i++) {
        ej7Tests[i][0].AreOtrthogonal(ej7Tests[i][1]);
    }

    //Ej 8
    document.write("<br><br><br><b>Ej 8: Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.</b><br>");
    
    let ej8Tests = ["Javascript es divertido", "aaeeiioouu eses", "Lorem Ipsum", "Texto de prueba"]
    
    for (let i = 0; i < ej8Tests.length; i++) {
        ToHackerSpeak(ej8Tests[i]);   
    }

    //Ej 9
    document.write("<br><br><br><b>Ej 9: Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].</b>");
    
    let ej9Tests = [10, 17, 23, 9, 12, 21, 49];

    for (let i = 0; i < ej9Tests.length; i++) {
        FindAllFactors(ej9Tests[i]);
    }
    
    //Ej 10
    document.write("<br><br><br><b>Ej 10: Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0].</b>");

    let ej10Tests = [ [1,1,1,1,2,2,3], [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], [88,77,66,55,8,7,6,5,1,1,2,2,3,3], [1,1,"a","a","b","b",1,3,4,5,"f","g", "g"]]

    for (let i = 0; i < ej10Tests.length; i++) {
        document.write("<br>New array: ", RemoveDupesFromArray(ej10Tests[i]))
    }
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
        if(charInMap[1] == 1){ //Checks for the value (the repetitions)
            firstNonRepeatedChar = charInMap[0]; //Stores the key (the letter)
            break;
        }
    }

    //Checks whether there was a character that didn't repeat or not, and displays it if there was
    firstNonRepeatedChar == null ? document.write("<br>Resultado: No char in the string is non repeated") : document.write("<br>Resultado: ", firstNonRepeatedChar);
}

//Auxiliary swap function for the bubble sort
function Swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Bubble sort from smallest to biggest
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

//Complementary function to the merge sort algorithm. Merges the split arrays in ascending order
function Merge(numList, lIndex, midPoint, rIndex){
    
    //Calculates the temp array sizes
    let lSize = midPoint - lIndex + 1;
    let rSize = rIndex - midPoint;

    //Creates the temp arrays with their set sizes
    let lTemp = new Array(lSize);
    let rTemp = new Array(rSize)

    //Copies the left and right parts to the temp arrays
    for (let i = 0; i < lSize; i++) { //Left array
        lTemp[i] = numList[lIndex + i];
    }

    for (let i = 0; i < rSize; i++) { //Right array
        rTemp[i] = numList[midPoint + 1 + i];
    }

    //Starts to "empty" the right and left arrays by copying the temp array values to the original array
    let lMerged = 0; //Keeps track of the elements left in the left array
    let rMerged = 0; //Keeps track of the elements left in the right array
    let newPosInOriginal = lIndex; //Used to asign the new position of the elements in the original, now being sorted array

    while (lMerged < lSize && rMerged < rSize) { //While no temp arrays have been "emptied"
        if (lTemp[lMerged] <= rTemp[rMerged]) {
            numList[newPosInOriginal] = lTemp[lMerged];
            lMerged++;
        }
        else{
            numList[newPosInOriginal] = rTemp[rMerged];
            rMerged++;
        }
        newPosInOriginal++;
    }

    //When one of the two temp arrays are "emptied"
    while (lMerged < lSize) { //Empty the left array
        numList[newPosInOriginal] = lTemp[lMerged];
        lMerged++;
        newPosInOriginal++;
    }

    while (rMerged < rSize){
        numList[newPosInOriginal] = rTemp[rMerged];
        rMerged++;
        newPosInOriginal++;
    }
}

//Merge sort from smallest to biggest (Basado en: https://www.geeksforgeeks.org/merge-sort/)
function MergeSort(numList, lIndex, rIndex){
    
    //If the sub arrays are of the same length or there is only one remaining, ends the recursion
    if(lIndex >= rIndex){
        return;
    }
    
    let midPoint = lIndex + Math.floor((rIndex - lIndex) / 2); //Gets each mid point
    
    MergeSort(numList, lIndex, midPoint); //Recursively splits the left part of the current array or sub array
    MergeSort(numList, midPoint + 1, rIndex); //Recursively splits the right part of the current array or sub array
    Merge(numList, lIndex, midPoint, rIndex); //Merges both split arrys in order after the recursive steps end
}   

//Reverses an array and returns a new array as the result
function ReverseArray(arrayToReverseOg){
    let arrayToReverse = [].concat(arrayToReverseOg); //Concatenates to make a copy
    
    document.write("<br><br> Array original: ", arrayToReverse)
    for (let i = 0; i < arrayToReverse.length - 1; i++) {
        for (let j = 0; j < arrayToReverse.length - i - 1; j++) {
                Swap(arrayToReverse, j, j+1);
        }
    }

    return arrayToReverse;
}

//Reverse the original array in the object and returns it
function ReverseOriginalArray (arrayToReverse){
    for (let i = 0; i < arrayToReverse.length - 1; i++) {
        for (let j = 0; j < arrayToReverse.length - i - 1; j++) {
                Swap(arrayToReverse, j, j+1);
        }
    }
}

//Finds the greatest common divison of two given numbers using Euclid's algorithm
function MaximoComunDivisor(num1, num2){
    document.write("<br><br>Num 1: ", num1, " Num : ", num2);
    
    let R;
    while ((num1 % num2) > 0){
        R = num1 % num2;
        num1 = num2;
        num2 = R;
    }
    
    let mcd = num2;

    document.write("<br>MCD: ", mcd);
}

//Converts text to "hacer speak" ex: 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'
function ToHackerSpeak(textToConvert){
    for (let i = 0; i < textToConvert.length; i++) {
        if (textToConvert[i] == "a" || textToConvert[i] == "A") {
            textToConvert = textToConvert.substring(0,i) + '4' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "s" || textToConvert[i] == "S"){
            textToConvert = textToConvert.substring(0,i) + '5' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "e" || textToConvert[i] == "E"){
            textToConvert = textToConvert.substring(0,i) + '3' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "i" || textToConvert[i] == "I"){
            textToConvert = textToConvert.substring(0,i) + '1' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "o" || textToConvert[i] == "O"){
            textToConvert = textToConvert.substring(0,i) + '0' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "B"){
            textToConvert = textToConvert.substring(0,i) + '8' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "G"){
            textToConvert = textToConvert.substring(0,i) + '6' + textToConvert.substring(i+1);
        }
        else if(textToConvert[i] == "<" || textToConvert[i] == "Z"){
            textToConvert = textToConvert.substring(0,i) + '2' + textToConvert.substring(i+1);
        }
    }

    document.write("<br>", textToConvert);
}

//Finds all factors of a given number
function FindAllFactors(numberToFind){
    document.write("<br><br>Finding factors of: ", numberToFind)

    for (let i = 0; i < numberToFind; i++) {    
        if (numberToFind % i == 0) { //If the number has a remainder of 0, it's a factor
            document.write("<br>", i, " is a factor");
        }
    }
}

//Removes duplicates from an array and returns the array without the duplicates
function RemoveDupesFromArray(arrayWithDupes){
    document.write("<br><br>Array original: ", arrayWithDupes);
    
    let arrayWithoutDupes = [];
    let charMap = new Map();

    //Iterates through every character of the string
    for (let i = 0; i < arrayWithDupes.length; i++) {
        if (!(charMap.has(arrayWithDupes[i]))) {//If the current character is not inside the new array
            charMap.set(arrayWithDupes[i], 1);
            arrayWithoutDupes.push(arrayWithDupes[i]);
        }
    }

    return arrayWithoutDupes
}

//----Classes----//

//3D vector
class Vector{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    //Adsd the other vector to the current values of this vector
    Sum(otherVector){
        this.x += otherVector.x;
        this.y += otherVector.y;
        this.z += otherVector.z;
    }

    //Substracts the other vector to the current values of this vector
    Substract(otherVector){
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        this.z -= otherVector.z;
    }

    //Calculates the magnitude of this vector
    GetMagnitude(){
        let magnitude = Math.sqrt(this.x**2 + this.y**2 + this.z**2);

        return magnitude;
    }

    //Gets unit vector and limits to 3 decimals
    GetUnitVector(){
        let magnitude = this.GetMagnitude();
        let unitVector = new Vector((this.x/magnitude).toFixed(3), (this.y/magnitude).toFixed(3), (this.z/magnitude).toFixed(3));

        return unitVector;
    }

    //Multiplies the vector by a scalar
    MultiplyByScalar(scalar){
        this.x = this.x*scalar;
        this.y = this.y*scalar;
        this.z = this.z*scalar;
    }

    //Calculates the dot product of this and another given vector
    DotProduct(otherVector){
        let dotProduct = ((this.x*otherVector.x) + (this.y*otherVector.y) + (this.z*otherVector.z));

        return dotProduct;
    }

    //Checks if this vector and another given vector are orthogonal
    AreOtrthogonal(otherVector){
        if (this.DotProduct(otherVector) == 0) {
            document.write("<br>")
            this.Print();
            document.write(" and  ");
            otherVector.Print();
            document.write(" are orthogonal")
        }
        else{
            document.write("<br>")
            this.Print();
            document.write(" and  ");
            otherVector.Print();
            document.write(" are not orthogonal")
        }
    }

    //Displays the x y and z values of this vector
    Print(){
        document.write("(X: ", this.x, " Y: ", this.y, " Z: ", this.z, ")")
    }
}