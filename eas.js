//this file is going to serve as the backend of my website

//first insert the element
const container = document.querySelector("#container");

const y_axis = document.createElement("div");
y_axis.classList.add("y_axis");

//make into a box by editing attributes
y_axis.style["background-color"] = "black";
y_axis.style.borderStyle = "solid";
y_axis.style.borderColor = "black";
y_axis.style.height = "40px";
y_axis.style.width = "40px";


//add it to the DOM
container.appendChild(y_axis);