// SCROLL REVEAL

function revealOnScroll(){
const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll", revealOnScroll);

// SPEED TEST ANIMATION

function startSpeedTest(){
let speed = 0;
let maxSpeed = Math.floor(Math.random()*300)+50;
let speedDisplay = document.getElementById("speedValue");

let interval = setInterval(()=>{
speed += 5;
speedDisplay.innerText = speed;

if(speed >= maxSpeed){
clearInterval(interval);
}
},50);
}