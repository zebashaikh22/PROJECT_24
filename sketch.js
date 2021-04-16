
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,dustbin;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();

	world = engine.world;

  var ground_options = {
		isStatic:true
	}
	
  ground = Bodies.rectangle(200,390,700,20,ground_options);
  World.add(world,ground);

  ball1 = new Ball(200,360);

  ground1 = new Ground(600,390,700,20);
  ground2 = new Ground(400,390,700,20);
  ground3 = new Ground(200,390,700,20);

  dustbin1 = new Dustbin(550,360,400,20);
  dustbin2 = new Dustbin2(500,380);
  dustbin3 = new Dustbin2(600,380);

	Engine.run(engine);
   
	
}


function draw() {
  background(0);

  Engine.update(engine);

  rect(ground.position.x,ground.position.y,400,20);
  
  ground1.display();
  ground2.display();
  ground3.display();

  ball1.display();
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ballObject.Body,ballObject.Body.position,{x:85,y:-85});

  }
}

