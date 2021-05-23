
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof;
//var constrainedLog;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//constrainedLog = new Log(250,180,80,PI/2);
	bob = new Bob(50,680,10,10)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  RoofSprite = createSprite(400, 200, 200,20);

 //constrainedLog.display();
  Bob.display();
	
  

 
  
  drawSprites();
 
}