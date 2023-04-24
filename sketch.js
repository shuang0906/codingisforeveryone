var tileCountX = 50;
var tileCountY = 50;

function setup() { 
  createCanvas(windowWidth,windowHeight); 
  colorMode(HSB,360,100,100,100);
  noStroke();
} 

function draw() { 
   // white back
  background(0,0,100);

  // count every tile
  var counter = 0;

  var tileWidth = width / tileCountX;
  var tileHeight = height /tileCountY;

  for (var gridY=0; gridY< tileCountY; gridY++) {
    for (var gridX=0; gridX< tileCountX; gridX++) {  
      var posX = float(tileWidth*gridX);
      var posY = float(tileHeight*gridY);
      fill(random(0,360),100,100,100);
      rect(posX, posY, tileWidth, tileWidth);
      counter++;
    }
  }
} 