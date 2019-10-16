function draw() {

  background(40);

  noFill();
  strokeWeight(6);
  stroke(255);

  for (let i = 300; i > 0; i -= 50) {
    if (i % 20 == 0) {
      fill(0);
    } else {
      fill(0);
    }
    ellipse(width / 2, height / 2, i, i);
  }
}
