
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     rope1=(bobObject1.body,roofObject.body, -bobDiamater*2,0)
	 rope2=(bobObject1.body,roofObject.body, -bobDiamater*2,0)
	 rope3=(bobObject1.body,roofObject.body, -bobDiamater*2,0)
	 rope4=(bobObject1.body,roofObject.body, -bobDiamater*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



