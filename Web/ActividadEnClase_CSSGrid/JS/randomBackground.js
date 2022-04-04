function main(){
    changeGridItemColors();
    //changeSubContainerColors();
}


function changeGridItemColors(){
    //Gets the main container
    let mainContainer = document.getElementById('main-container');
    let children = mainContainer.children;

    //Iterates through the children of the main container
    for (let i = 0; i < children.length; i++) {
        //Main container
        let child = children[i];
        child.style.backgroundColor = randomColor();
        child.textContent = 'item ' + i;
    }
}

function changeSubContainerColors(){
    //If the html has a secondary container
    if (document.getElementById('secondary-container') != null) {
        let subContainer = document.getElementById('secondary-container');
        let subChildren = subContainer.children;

        //Secondary container
        for (let j = 0; j < subChildren.length; j++) {
            let subChild = subChildren[j];
            subChild.style.backgroundColor = randomColor();
            subChild.textContent = 'subitem ' + j;
        }
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