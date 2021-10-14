function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  line (windowWidth / 2,0,windowWidth / 2, windowHeight)
  line (0,windowHeight/2,windowWidth,windowHeight/2)
  circle (mouseX,mouseY,100)
  fill ('white')
  if (mouseX < windowWidth / 2 && mouseY > windowHeight / 2 || mouseX > windowWidth / 2 && mouseY < windowHeight / 2)
    fill ('red')
}
