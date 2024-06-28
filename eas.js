//this file is going to serve as the backend of my website

function clearGrid(){
    //select container because all the divs that make up the 
    //grid are located inside of it
    const container = document.querySelector("#container");

    //clear all child elements
    container.innerHTML= '';
}
function getSize(){
    try{
        let gridSize = prompt("Enter the size. Has to be between 0 to 100.");

        if (gridSize === null){
            throw new Error("input cancelled by user");
        }
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100){
            throw new Error("Please enter a valid number.");
        }
        let sum = gridSize * gridSize;
    
        //clear current grid
        clearGrid();
        //create the new one
        createGrid(sum);
    }

    catch{
        alert (Error.message);
        //call recursive function again
        //meaning prompt the user again
        getSize();
    }
}

function createGrid(gridSize) {
    let width = (100/ Math.sqrt(gridSize)) + "vw";
    let height = (100/ Math.sqrt(gridSize)) + "vh";
    console.log(width);
    console.log(height);

    for (let i = 1; i < gridSize; ++i) {
        //first insert the element
        const container = document.querySelector("#container");

        const y_axis = document.createElement("div");
        y_axis.classList.add("y_axis");

        //make into a box by editing attributes
        y_axis.style["background-color"] = "black";
        y_axis.style.flex = "1 1 1";

        //set it equal to a string with the right measurements for each
        //box
        y_axis.style.width = width;
        y_axis.style.height = height;

        //add it to the DOM
        container.appendChild(y_axis);
    }

    //move this here instead of main that way everytime a new grid is created
    //user can begin to etch a sketch
    //this allows for the change of background as you go over a grid
    const temp = document.querySelectorAll("div");

    temp.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "white";
        });
    });
}


function main() {
    //reason for 256 is that 16 x 16 = 256 
    let size = 256;

    //call function to create initial grid
    createGrid(size);


    const btn = document.querySelector(".prompt");

    btn.addEventListener("click", getSize);
}

main();