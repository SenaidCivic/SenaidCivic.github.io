function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let Draw = 
  strokeWeight(3)
  line(mouseX,mouseY-50,mouseX,mouseY+100)
  line(mouseX,mouseY+100,mouseX-50,400)
  line(mouseX,mouseY+100,mouseX+50,400)
  line(mouseX,mouseY,mouseX-80,150)
  line(mouseX,mouseY,mouseX+80,150)
  circle(mouseX,mouseY-100,100)
  ellipse(mouseX-20,mouseY-110,15,30)
  ellipse(mouseX+20,mouseY-110,15,30)
  
  push()
  fill(230,0,0)
  arc(mouseX, mouseY-87, 50, 50, 0, PI + TWO_PI, CHORD)
  pop();

}
