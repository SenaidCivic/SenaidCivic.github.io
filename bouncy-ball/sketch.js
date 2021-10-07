function setup() {
  createCanvas(windowWidth, windowHeight);
}

let xPos=50;
let yPos=50;
let Diameter=100;
let ySpeed=20;
let xSpeed=20;

touchRightSide=window.innerWidth-50;
touchLeftSide=0+50;
touchBottom=window.innerHeight-50;
touchTop=0+50

function draw(){
  background(255);
  circle(xPos,yPos,Diameter);

  xPos=xPos+xSpeed;
  yPos=yPos+ySpeed;

  if(xPos >= touchRightSide || xPos <= touchLeftSide){
   xSpeed=-xSpeed
   fill ('blue')
}
if(yPos >= touchBottom || yPos <= touchTop){
  ySpeed=-ySpeed
  fill ('red')
}
}  