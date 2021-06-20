var ground, groundBody, lS, Ball, rS, bt;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(900, 500);


	ground = createSprite(width / 2, height - 50, width, 10);
	ground.shapeColor = "brown";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




	groundBody = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
	World.add(world, groundBody);








	rS = new dustbin(860, height - 105, 20, 100);
	bt = new dustbin(750, height - 65, 200, 20);
	lS = new dustbin(650, height - 105, 20, 100);
	Ball = new ball(100, 400, 20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);


	ground.x = groundBody.position.x;
	ground.y = groundBody.position.y;




	drawSprites();
	Engine.update(engine);


	rS.display();
	bt.display();
	lS.display();
	Ball.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:55,y:-85});
	}
}

