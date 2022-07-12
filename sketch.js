
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball;
var ground;
var rightSide;
var leftSide;
function setup() {
	createCanvas(screen.width, screen.height);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2, 670, width, 20)
	balls_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(300, 300, 30, balls_options)
	World.add(world, ball)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide = new Ground(900, 600, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x, ball.position.y, 30);
  drawSprites();
 
}
function keyPressed(){
	if (keyCode == 32){
		Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 100, y: 15})
	}
}



