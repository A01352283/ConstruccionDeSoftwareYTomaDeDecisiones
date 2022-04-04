function main(){
    changeGridItemColors();
}

function changeGridItemColors(){
    //Gets the main container 
    let mainContainer = document.getElementById('main-container');
    let children = mainContainer.children;
    
    //Iterates through the children of the main container
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.style.backgroundColor = randomColor();
        child.textContent = i;
    }
}

//Returns a random color
function randomColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}