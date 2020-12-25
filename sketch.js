const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var groundobj;
var b1, b2, b3, b4;



var particles=[];
var plinkos = [];

var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world= engine.world;

  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
  for (var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75))
  }
  for (var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
    }
    for (var j=40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,275))
      }
      for (var j=15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,375))
        }

       


 b1 = createSprite(1, 400, 5, 800);
 b2 = createSprite(479, 400, 5, 800);
 b3 = createSprite(240, 1, 480, 5);
 b4 = createSprite(240, 799, 480, 5);
 fill("brown");

 groundobj = new Ground (240, 790, 480, 20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  groundobj.display();
  
  for(var d=0; d < divisions.length; d++){
    divisions[d].display();

  }
  for(var a=0; a< plinkos.length; a++){
    plinkos[a].display();
  }

  b1.display();
  b2.display();
  b3.display();
  b4.display();


  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
            }

for(var p=0; p<particles.length; p++){
  particles[p].display();
}
      
  drawSprites();
}

