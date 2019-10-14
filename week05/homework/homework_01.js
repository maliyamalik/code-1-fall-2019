function setup() {
    createCanvas(400, 400);
}

function drawBlueCircle (){

 
  ellipse(width/2, height/2, 100);
  fill(0, 0, 255);
}

function drawRedCircle (){
  ellipse(width/2, height/2, 100);
  fill(255, 0, 0);
}
function draw() {
    background(255);

    if (mouseIsPressed) {
 
        drawRedCircle(width / 2, height / 2, 100);
    } else {
        color(0,0,255);
        drawBlueCircle(width / 2, height / 2, 100);
    }
}
