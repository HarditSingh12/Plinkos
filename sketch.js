const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground,groundSprite;

var plinkos = []
var division = []
var particles = []

function setup() {
 createCanvas(480,800);

 engine = Engine.create();
 world = engine.world;

 ground = Bodies.rectangle(240,790,480,20,{isStatic:true});
 World.add(world,ground);


 groundSprite = createSprite(240,790,480,20);

 particle1 = new Particle(200,1,10);

 
 for(var i =15; i<width; i = i+45){
  plinkos.push(new Plinko(i,120));
  
}

for(var i=40;i<460;i=i+50){
  plinkos.push(new Plinko(i,190));
}

for(var i=25;i<width;i=i+40){
  plinkos.push(new Plinko(i,250));
}

for(var i=20;i<480;i=i+40){
  plinkos.push(new Plinko(i,320));
}

for(var i=20;i<width;i=i+50){
  plinkos.push(new Plinko(i,390));
}



//-------------------------------------

for(var i=10;i<width;i = i+90){
  division.push(new Divisions(i,760))

}

  
}


function draw() {
        Engine.run(engine);
        background(0);  

        groundSprite.x = ground.position.x;
        groundSprite.y = ground.position.y;
        
      for(i = 0;i<plinkos.length;i++){
        plinkos[i].display();
      }

      //---------------------------------------

      for(i=0;i<division.length;i++){
        division[i].display();
      }
      
      if(frameCount%20===0){
        particles.push(new Particle(width/2-30,10));
      }

      for(i=0;i<particles.length;i++){
        particles[i].display();
      }

      
        //particle1.display();
      
        drawSprites();
}