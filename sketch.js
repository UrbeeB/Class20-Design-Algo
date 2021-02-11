var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 300, 20, 40);
  movingRect.shapeColor ="green";
  movingRect.debug=true;
  fixedRect = createSprite(300, 200, 30, 50);
  fixedRect.shapeColor ="red";
  fixedRect.debug="true"
}
function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  var collisionDetectorX = 0;
  collisionDetectorX = movingRect.width/2 + fixedRect.width/2
  var collisionDetectorY = 0;
  collisionDetectorY = movingRect.height/2 + fixedRect.height/2
   
 if((movingRect.x - fixedRect.x < collisionDetectorX)&&
  (fixedRect.x-movingRect.x <collisionDetectorX)&& 
   (movingRect.y - fixedRect.y <collisionDetectorY)&&
   (fixedRect.y-movingRect.y <collisionDetectorY)){
  movingRect.shapeColor ="yellow";

 }else 
 {movingRect.shapeColor ="green";}
  drawSprites();
}