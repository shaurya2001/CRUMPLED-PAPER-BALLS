const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var groundObject,leftSide,rightSide,ball;

var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;
	
	
	//creating bodies//
	
	groundObject=new ground(width/2,670,width,20);
	
	ball=new Ball(100,200,30);
	
	leftSide=new ground(950,600,20,120);
 
	rightSide=new ground(1200,600,20,120);

	
	
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
 background("black");
  
  
  groundObject.display();
  leftSide.display();
  rightSide.display();
  ball.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
  
	}
}
