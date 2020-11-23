
var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";

  movingRect.velocityX=-5;
  fixedRect.velocityX=5;

  //movingRect.velocityY=-5;
  //fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/
  
  /*if(isTouching(movingRect,gameObject1)){
     movingRect.shapeColor = "blue";
     gameObject1.shapeColor = "blue";
  }
  else{

     movingRect.shapeColor = "green";
     gameObject1.shapeColor = "green";
  }*/

  bounceOff(movingRect,fixedRect)
  drawSprites();
}

