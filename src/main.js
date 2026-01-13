import { Camera } from "./Camera";


const hiButton = document.getElementById("hiButton");
const scene = document.getElementById("scene");
const world = document.getElementById("world");

const camera = new Camera(scene, world, 0, 0);

let counter = 0;

hiButton.innerHTML = `${counter}`;

const testDiv = document.createElement("div");
testDiv.style.border = "solid 2px";
testDiv.style.width = "100px";
testDiv.style.height = "200px";
testDiv.style.left = "200px";
testDiv.style.top = "200px";
testDiv.style.position = "absolute";

world.appendChild(testDiv);

hiButton.addEventListener("click", (e) => {
    ++counter;
    hiButton.innerHTML = `${counter}`;
    if(counter === "1"){
        hiButton.style.background = "red";
    } else {
        hiButton.style.background = "green";
    }

});