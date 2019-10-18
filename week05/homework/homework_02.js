function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    drawButton(width / 2, height / 2, 200, 100);
}

function drawButton(x, y, w, h) {
    let clickedInsideButton = true;

    if (mouseIsPressed) {
      let d = dist(mouseX, mouseY, width/2, height/2);
  if (d < 99) {
        fill(200, 100, 0);
  }
    } else {
        fill(100, 200, 0);
    }

    rectMode(CENTER);
    rect(x, y, w, h, 10);

} 
