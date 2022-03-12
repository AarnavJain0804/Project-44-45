var bg
var balloon1, balloon2, balloon3
var balloon

function preload() {
  bg = loadImage("assets/bg.png")
  balloon = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  airballoon = createSprite(500,500)
  airballoon.addAnimation("balloon",balloon)
  airballoon.scale = 0.4;
}
function draw() {
  background(bg);
  
  if(keyDown("a")){
airballoon.velocityY = -6
  }

  airballoon.velocityY = airballoon.velocityY + 1
  drawSprites();
}