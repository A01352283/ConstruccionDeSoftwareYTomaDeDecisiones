function main(){
    GetMousePos();
}

function GetMousePos(){
    let xPos;
    let yPos;

    containerDiv = document.getElementById('mousePosition');

    containerDiv.appendChild(document.createTextNode(`Mouse X: , Mouse Y: `));
    
    document.addEventListener('mousemove', (event) => {});

    


}