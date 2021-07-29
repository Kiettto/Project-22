const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var ball, ball2, ball3, ball4, ball5;
//var rope, rope2, rope3, rope4, rope5;



function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8,
		isStatic:true
	}

	var roof_options={
		isStatic:true			
	}


	roof = Bodies.rectangle(200,100,250,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(100,200,10,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(150,50,10,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(200,50,10,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(250,50,10,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(300,50,10,ball_options);
	World.add(world,ball5);

	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}

		}
		

	}


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,10);

  ellipse(ball2.position.x,ball2.position.y,10);

  ellipse(ball3.position.x,ball3.position.y,10);

  ellipse(ball4.position.x,ball4.position.y,10);

  ellipse(ball5.position.x,ball5.position.y,10);


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
