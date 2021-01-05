var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	box1=createSprite(300,590,20,200)	
  box2=createSprite(400,690,200,20)
  box3=createSprite(500,590,20,200)
	packageSprite=createSprite(400,200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//	groundSprite=createSprite(width/2, height-35, width,10);
//	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	//packageBody.collide(box2);

	box2 = Bodies.rectangle(400,690,200,20 , {isStatic:true} );
	World.add(world, box2);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.x = helicopterSprite.x
  packageSprite.y= packageBody.position.y
 

  drawSprites();
console.log(mouseY)
 
}


    


//The box has three sides of red color, which are static bodies.
//The bottom is a static body which is 20 pixels tall and 200 pixels wide.
//The sides are 100 pixels tall and 20 pixels wide.

