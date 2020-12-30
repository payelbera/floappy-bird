var ground, pipe, pipe2, bird,score;
var grassimg , birdimg
// declare variables to load images
function preload(){
// load the images in variables 
grassimg = loadImage("assets/continuous_grass.png")
birdimg = loadImage("assets/bird.png")
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(width/2,height/4,width,height)
  pipe = createSprite(401,350)
// set the animation for pipe
//pipe.scale = 0.14
pipe2 = createSprite(401,50)
//pipe2.scale = 0.14
//set animation for pipe2
ground.addImage(grassimg)
ground.scale = 2.5
bird = createSprite(50,200)
// set animation for bird 
bird.addImage(birdimg)
bird.scale=0.15 

score = 0
}


function draw() {
  background("black")
  if(ground.x<-0){
    ground.x = 400
  }
  ground.velocityX = -3
  if(keyDown("space")){ 
    bird.velocityY = -7
}
//console.log("pipe"+pipe.x)
//console.log("bird "+bird.x)
pipe.velocityX=-3
if(pipe.x<-0){
    pipe.x = 401
   pipe.y = random(340,390)
  }
  pipe2.velocityX=-3 
if(pipe2.x<-0){
    pipe2.x = 401
     pipe2.y = random(10,60)
  }
bird.velocityY=bird.velocityY+0.25
if(bird.x === pipe.x){
  if (bird.isTouching(pipe) || bird.isTouching(pipe2) ) {
  score = 0
 }else{
   score = score + 1
 }
  
}



  drawSprites()
    textSize(24)
    text(score,200,30)
    
}
