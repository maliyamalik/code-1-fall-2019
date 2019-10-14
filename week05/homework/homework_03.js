function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(180);
    rectMode(CENTER);
    fill("#EE3366");
    // a coordinate-related function needs to be used here
    resetMatrix();
    angleMode(DEGREES);
    // a coordinate-related function needs to be used here
    rotate(PI / 0.002);
    // a coordinate-related function needs to be used here
    translate(-130, -205);
    rect(0, 0, 50, 50);
    rect(100, 0, 50, 50);
    rect(200, 0, 50, 50);
    rect(300, 0, 50, 50);
    // a coordinate-related function needs to be used here
    
