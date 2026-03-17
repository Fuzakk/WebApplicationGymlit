import { Camera } from "./Camera";
import { Novy } from "./novy";
import { Object } from "./Object";
import { Control } from "./control";
import { Ball } from "./ball";
import {Zem} from ".zem"
 
const hiButton = document.getElementById("hiButton");
//const novyObjekt = document.getElementById("novy");
const scene = document.getElementById("scene");
const world = document.getElementById("world");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const camera = new Camera(scene, world, 0, 0);

const zem = document.getElementById("zem")
zem.style.border = "solid 6px"
zem.style.position = "absolute"
zem.style.height = "10px"
zem.style.width = "1480px"
zem.style.top = "777px"
zem.style.left = "0px"




 
const ball = new Ball(world, 50, 50, "purple", 100, 100)

const xControl = new Control ("Souřanice x")
//console.log(xControl.controlName) //napise mi to do konzole
xControl.buttonElement.onclick = () => {
ball.element.style.left = `${xControl.inputElement.value}px`
}; //tzv lambda funkce, do slozenych pisu to, co se ma stat kdyz ji zavolam

const yControl = new Control ("Souřanice y")
yControl.buttonElement.onclick = () => {
ball.element.style.top = `${yControl.inputElement.value}px`;
};


let lastTime = document.timeline.currentTime
let ax = 0
let ay = 20
let animID = 0;

function simulate (timestamp) {
    if (lastTime === 0) lastTime = timestamp
    let dt = (timestamp - lastTime )/1000
    lastTime = timestamp

    ball.vx = ball.vx + ax * dt;
    ball.vy = ball.vy + ay * dt;

    ball.x = ball.x + ball.vx * dt;
    ball.y = ball.y + ball.vy * dt;
    ball.element.style.left = `${ball.x}px`
    ball.element.style.top = `${ball.y}px`
  
    animID = requestAnimationFrame(simulate)
    }

   
    start.addEventListener("click", (e) => {
        requestAnimationFrame(simulate)

    })
    
    stop.addEventListener("click", (e) => {
        cancelAnimationFrame(animID)

    })
    reset.addEventListener("click", (e) => {
        lastTime = 0;
        ball.element.style.top = `${ball.x}px`
        ball.element.style.left = `${ball.x}px`
        ball.element.style.top =  `${xControl.inputElement.value}px`
        ball.element.style.left = `${yControl.inputElement.value}px`
        ball.vx = 0;
        ball.vy = 0;
        cancelAnimationFrame(animID)
    })


let counter = 0;
 
hiButton.innerHTML = `${counter}`;
 
/*const testDiv = new Object(camera, 300, 300, 200, 200);
 
testDiv.element.classList.add("roundObject");
testDiv.element.style.position = "absolute";
 
world.appendChild(testDiv.element);
 
const round = new Object(camera, 0, 0, 50, 50);
round.element.classList.add("round");
round.element.style.position = "absolute";
testDiv.element.appendChild(round.element);
 
round.element.addEventListener("mousedown", (e) => {  
    e.preventDefault();
    if (e.button === 2){
        round.element.style.background = null;
    }
    if(e.button === 0){
        round.element.style.background = "red";
    }
})
 
const round2 = new Object(camera, 50, 50, 50, 50);
round2.element.classList.add("round");
round2.element.style.position = "absolute";
testDiv.element.appendChild(round2.element);
 
round2.element.addEventListener("mousedown", (e) => {  
    e.preventDefault();
    if (e.button === 2){
        round2.element.style.background = null;
    }
    if(e.button === 0){
        round2.element.style.background = "red";
    }
})
 
hiButton.addEventListener("click", (e) => {
    ++counter;
    hiButton.innerHTML = `${counter}`;
    if(counter === "1"){
        hiButton.style.background = "red";
    } else {
        hiButton.style.background = "green";
    }
 
});
 
const objectList = [];
 
 
novyObjekt.addEventListener("click", (e) => {
    const ob = new Novy(world, 10, 10, 100, 100);
    ob.element.classList.add("objekt");
    objectList.push(ob);
});*/