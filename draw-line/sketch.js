let xStart = 0
let yStart = 0
let xEnd = 0
let yEnd =0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
line (xStart, yStart,xEnd, yEnd)

if (mouseIsPressed){
  strokeWeight(5)
  xEnd = mouseX
yEnd = mouseY
}


}

function mousePressed(){
xStart = mouseX
yStart = mouseY
}