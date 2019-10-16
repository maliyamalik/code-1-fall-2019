function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(40);

  noFill();
  strokeWeight(6);
  stroke(255);

  for (let i = 300; i > 0; i -= 50) {
    if (i % 20 == 0) {
      
    } else {
      
    }
    circle(width / 2, height / 2, i, i);
  }
}
}
