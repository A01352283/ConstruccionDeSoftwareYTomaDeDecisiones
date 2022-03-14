function main(){
    GetMousePos();
}


//Gets the mouse x and y positions and adds them to a text node to be printed
function GetMousePos(){
    //Adds the event listener to get mouse position on mouse movement
    document.addEventListener('mousemove', (event) => {document.getElementById("mousePosition").textContent = `Posición del mouse X: ${event.x} Y: ${event.y}`});
}

//Gets the first and last name from a form and displays it on a text node (
function getFormValue(){
    //Modifies the text from the P next to the form with the form data
    containerDiv = document.getElementById("form1P").textContent = `First name: ${document.getElementById("fname").value} Last name: ${document.getElementById("lname").value}`;
}

//Inserts a row to the first table
function insertRow(){
    //Gets tabe and table length
    let table = document.getElementById("sampleTable");
    let numTableRows = table.rows.length;

    //Inserts row on the last pos
    let row = table.insertRow(numTableRows);

    //Adds cells and gives them content
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = `Row ${table.rows.length} column ${i+1}`;
    }
}

//Inserts a column to the first table
function insertColumn(){
    //Gets the table object
    let table = document.getElementById("sampleTable");

    //Adds a cell at the end of each row
    for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].insertCell(-1);
        cell.innerHTML = `Row ${i+1} column ${table.rows[0].cells.length}`;
    }
}

//Changes the content of the indicated cell in excercise 4's table
function changeContent(){
    //Gets the position and text values from the form and also gates the table object
    let table = document.getElementById("myTable");
    let row = document.getElementById("rowForm2").value;
    let column = document.getElementById("columnForm2").value;
    let textToDIsplay = document.getElementById("textToDisplay").value;

    //Replaces the text on the given position
    table.rows[row-1].cells[column-1].innerHTML = textToDIsplay;
}

//Adds a rndom color from the list to the options
function addColor(){
    let select = document.getElementById("colorSelect");
    let newOption = document.createElement("option"); //Creates a new option element

    let colorList = ['Blue', 'Red', 'Green', 'Orange', 'Yellow', 'Pink', 'Brown', 'Black', 'White', 'Purple'];
    
    //Random color selection
    const random = Math.floor(Math.random() * colorList.length);
    let selection = (random, colorList[random]);   
    
    //Adds the random selection to the list
    newOption.text = selection;
    select.add(newOption);
}

//Removes a random color from the options
function removeColor(){
    let select = document.getElementById("colorSelect");

    select.remove(Math.floor(Math.random() * select.length));
}

//Changes to a new placeholder image on mouse over
function changeImgSizeOnMouseOver(){

    //Generate the new URL
    let height = Math.floor(Math.random() *  (600 - 300) + 300);
    let width = Math.floor(Math.random() *  (600 - 300) + 300);
    
    //Changes to a new image 
    document.getElementById("imgToChange").src = "http://placekitten.com/" + width + "/" + height;
}