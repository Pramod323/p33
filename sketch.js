const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];


var engine, world;

var divisionHeight=300;
var score =0;
var count = 0;

var gamestate = "play"; 
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
  textSize(20);
  text("Score : "+score,20,30);
  fill("white");
  
  textSize(23)
  text("   500 ", 5, 550);
  text("   500 ", 80, 550);
  text("   500 ", 160, 550);
  text("   500 ", 240, 550);
  text("   100 ", 320, 550);
  text("   100 ", 400, 550);
  text("   100 ", 480, 550);
  text("   200 ", 560, 550);
  text("   200 ", 640, 550);
  text("   200 ", 720, 550);
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<320){
         score += 500;
         particle = null;
         if (count>=5) {
          gamestate = "end";
         } 
       }

       if(particle.body.position.x>320 && particle.body.position.x<560){
        score += 100;
        particle = null;
        if (count>=5) {
          gamestate = "end";
         } 
       }

       if(particle.body.position.x>560){
        score += 200;
        particle = null;
        if (count>=5) {
          gamestate = "end";
         } 
       }
       
      }
   
    }
    //text(mouseX+" : "+ mouseY,200,200);
}

function mousePressed() {
  if(gamestate!=="end"){
    particle = new Particle(mouseX,10,10);
    count++
  }
}