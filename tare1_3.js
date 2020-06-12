var squares = [];
var pieces = [];

function setup() {
  createCanvas(200, 200);

  function Square(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.occupied = false;

  this.highlight = function() {
    push();
    strokeWeight(2);
    stroke(255, 255, 0);
    noFill();
    rect(this.x, this.y, 50, 50);
    pop();
  }
}
  
  // Create the squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      squares.push(square);
    }
  }

 }

function draw() {
  background(255);
  drawBoard();
}

// Function just for drawing the board
function drawBoard() {
  black = 220;
  white = 30;
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(black);
        }
        if (y % 100 == 50) {
          fill(white);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(black);
        }
        if (y % 100 == 0) {
          fill(white);
        }
      }

      rect(x, y, 50, 50);
    }
  }
}
