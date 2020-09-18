
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2, ball3, ball4, ball5;
var chain1, chain2, chain3, chain4, chain5;
var ground;
function preload() {

}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200, 100, 200, 30);
	ball1 = new Ball(200, 300, 50, 50);
	ball2 = new Ball(150, 300, 50, 50);
	ball3 = new Ball(250, 300, 50, 50);
	ball4 = new Ball(300, 300, 50, 50);
	ball5 = new Ball(100, 300, 50, 50);

	chain1 = new String(ball1.body, { x: 200, y: 100 });
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);



	ground.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball5.display();
	ball4.display();


	chain1.display();

	drawSprites();

}



