var trex, trex_run
var ground
function preload() {
  trex_run = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundi = loadImage("ground2.png")
}
function setup() {
  createCanvas(600,200);
  edges = createEdgeSprites();
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_run);
  trex.scale = 0.7; 

  ground = createSprite(200,180,600,20);
  ground.addImage("ground",groundi);
  ground.x = ground. width/2;
}


function draw() 
{
  background("white");
  
  ground.velocityX = -2;
  if(ground.x <0){
    ground.x = ground. width/2;
  }

  if (keyDown("space")){
    trex.velocityY = -10;
  }
 trex.velocityY = trex.velocityY+0.5;

 trex.collide(ground);
  drawSprites();
}





