function setup() {

  // Creating a canvas
  createCanvas(800,400);
// MovingRect.x - FixedRect.x = FixedRect.width/2 + MovingRect.width/2
  // Creating two rectangles
  movingRect = createSprite(400, 200, 50, 25);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "red";
}

// Main part of the code called
function draw() {

  // Colouring the background
  background(255,255,255);  

  // Moving the movingRect with the mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // Finding the differnce between moving Rect and fixed Rect using x coordinate
  console.log(movingRect.x - fixedRect.x);

  // Changing the color of the sprites if they collide with each other
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  // Drawing the sprites
  drawSprites();
}