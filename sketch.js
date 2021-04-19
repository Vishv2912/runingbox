
var fixed1, fixed2, fixed3, fixed4;
var moving;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    moving=createSprite(random(10,750),300,20,20);
    moving.shapeColor="white";
    moving.velocityX=3;
    moving.velocityY=3;

   
    fixed1=createSprite(100,580,180,30);
    fixed1.shapeColor="red";

    fixed2=createSprite(300,580,180,30);
    fixed2.shapeColor="green";

    fixed3=createSprite(500,580,180,30);
    fixed3.shapeColor="blue";

    fixed4=createSprite(700,580,180,30);
    fixed4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(moving.x<0){
      music.stop()
        moving.velocityX=3
    }else if(moving.x>800){
      music.stop()
        moving.velocityX=-3
    }
   
  if(moving.isTouching(fixed4)){
    music.play()
    moving.shapeColor="yellow";
    moving.bounceOff(fixed4);
    
  }
  
  else if(moving.isTouching(fixed3)){
    music.stop();
    moving.shapeColor="blue";
    bounceOff(moving,fixed3)
   
  }
    
  else if(moving.isTouching(fixed2)){
    music.stop()
    moving.shapeColor="green";
    bounceOff(moving,fixed2)
    moving.velocityX=0;
    moving.velocityY=0;
  }
  
  else if(moving.isTouching(fixed1)){
    music.stop()
    moving.shapeColor="red";
    moving.bounceOff(fixed1)
  }
  if (moving.y<0){
    music.stop()
    moving.velocityY=3
  }
    drawSprites()
}
