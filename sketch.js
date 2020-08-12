//Global Variables

var scene,sceneimg;
var monkey,monkeyrunning,monkeycollided;
var stone,stoneimg,obdtaclegroup;
var banana,bananaimg,bananagroup;
var ground,groundimg;
var score;
var canvas;

function preload(){
  sceneimg=loadImage("jungle.jpg");
  stoneimg=loadImage("stone.png");
  bananaimg=loadImage("Banana.png");
  groundimg=loadImage("ground.jpg");
 monkeyrunning=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03","Monkey_04","Monkey_05","Monkey_06,","Monkey_07","Monkey_08","Monkey_09","Monkey_10");
 
}


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  scene=createSprite(20,20);
  scene.addImage(sceneimg);
  
  ground=createSprite(600,580,90,70);
  ground.addImage(groundimg);
  monkey=createSprite(40,220,20,20);
  monkey.addImage(monkeyrunning);
  
  
  bananagroup=new Group();
  obstaclegroup=new Group();
  
  scene.scale=2;
 ground.scale=0.5;
 
  monkey.scale=0.5;
  
  fill("red");
  textSize(20);
}


function draw(){
 background(255); 
 var index = 0;

 //x and y position of the cars
 var x = 0;
 var y;
var players=[];
 
   //add 1 to the index for every loop
   index = index + 1 ;

   //position the cars a little away from each other in x direction
   x = x + 200;
   //use data form the database to display the cars in y direction
   y = displayHeight - players.distance;
   players[index-1].x = x;
   players[index-1].y = y;

   if (index === monkey.index){
     
     camera.position.x = displayWidth/2;
     camera.position.y = players[index-1].y
   
  
  }
  
   ground.velocityX=-5;
    
  if (ground.x < 0){
    ground.x = ground.width/10;
  }
    scene.velocityX=-8;
    if (scene.x < 0){
    scene.x = scene.width/2;
  } 
 console.log(monkey.y); 
 
 
  
  
 
  
  
  
  
 
  
  
  
  switch(score){
  
  case 20:monkey.scale=0.6;
      break;
      
  case 40:monkey.scale=0.8;
      break;
  
   case 60:monkey.scale=0.9;
         break;
         
    case 80:monkey.scale=1;
      break;
      
      
      case 150: monkey.scale=0.11;
        break;
        
        default:break;
  
  } 
    
    
    if(keyDown("UP_ARROW") && monkey.y >=270){  
 monkey.velocityY=-12;  
   
 }
   monkey.velocityY = monkey.velocityY +0.3;
 
  
  
  
 
  
  
  
  

  
  
 food();
   stonegroup();
    if (bananagroup.isTouching(monkey)) {
  score=score+2;
      bananagroup.destroyEach();
  } 
    
    if(obstaclegroup.isTouching(monkey)){
  
    monkey.scale=0.5;
    obstaclegroup.destroyEach();
    }

    
    
    
    
 edge= createEdgeSprites();
  monkey.collide(edge[3]);
  
    
    
  
    

  
  
  drawSprites();
  score=Math.round(World.frameCount/200);
  text("SCORE :"+score,60,30);
}


 function food () {
  if(World.frameCount%80===0){
    var banana= createSprite(400,random(20,120));
   banana.addImage(bananaimg);
  banana.scale=0.3;
  banana.velocityX=-5;
banana.lifetime=80;
    bananagroup.add(banana);
  }
 }
    
    
    function stonegroup(){
   
 if(World.frameCount%100===0){  
var stone = createSprite(random(200,800),600);
stone.addImage(stoneimg); 
 stone.scale=0.4;
stone.velocityX=-5;
stone.lifetime=80;
 obstaclegroup.add(stone );


  }
  
  }






