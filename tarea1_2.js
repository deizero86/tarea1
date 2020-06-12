function setup() {

  // Sets the screen to be 200 pixels wide and 200 pixels high
  createCanvas(200, 200);
  background(0);
  noSmooth();

  translate(140, 0);

  // Draw lines
  stroke(255);
  line(-40, 0, -40, 100);
    stroke(255);
  line(-40, 100, 60, 200);
    stroke(255);
  line(-40, 100, -145, 200);
  
}
