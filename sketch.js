var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState=1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,700,20);
 text(500,25,700);
 text(500,105,700);
 text(500,185,700);
 text(500,265,700);
 text(100,345,700);
 text(100,425,700);
 text(100,505,700);
 text(200,585,700);
 text(200,665,700);
 text(200,745,700);
 

line(0,500,800,500);
stroke("red")
  Engine.update(engine);
  ground.display();
  
  if(gameState==2){
    text("GAME OVER", 150, 250);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /*if(frameCount%60===0){
    particles.push(new Particle(random(0,800), 10,10));
  }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   function MousePressed() {
     if (gameState!=2) {
       turn++;
       particle=new Particle(mouseX,10,10);
     }
   }

   if (particle!=null) {

    particle.display();

    if (particle.body.position.y>760) {
      if (particle.body.position.x < 300) {
        score=score+500;
        particle=null;
        if (turn>=5) {
          gameState=2;
        }
      }
     
      else if (particle.body.position.x > 301 && particle.body.position.x < 600) {
        score=score+100;
        particle=null; 
        if (turn>=5) {
          gameState=2;
        }
      }
    } else if (particle.body.position.x > 601 && particle.body.position.x < 900) {
        score=score+200;
        particle=null;
        if (turn>=5) {
          gameState=2;
        }
      }
    }

}