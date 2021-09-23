let xPos
let yPos

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos=width / 2
  yPos=height / 2
}


let Diameter=100

function draw() {
  background(255);
circle(xPos,yPos,Diameter);
}
