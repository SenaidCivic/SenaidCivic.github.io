let startXs = []
let startYs = []
let endXs = []
let endYs = []
function reset() {
  startXs = []
  startYs = []
  endXs = []
  endYs = []
}
function setLast(x, y) {
  let lastIndex = endXs.length - 1
  endXs[lastIndex] = x
  endYs[lastIndex] = y
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5)
}

function draw() {
  background(255);
  for (let i = 0; i < endXs.length; i++) {
    line(startXs[i], startYs[i], endXs[i], endYs[i])
  }
  if (mouseIsPressed) {
    setLast(mouseX, mouseY)

  }
}

function mousePressed() {
  startXs.push(mouseX)
  startYs.push(mouseY)
  endXs.push(mouseX)
  endYs.push(mouseY)
}

function keyPressed() {
  if (key == "e") {
    reset()
  }

}