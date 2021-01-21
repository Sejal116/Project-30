
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingshot,polygon,polygon_img;
var ground;


function preload(){
 polygon_img=loadImage("polygon.png")
}

function setup(){
    createCanvas(1000,500)

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    block10 = new Block(280,275,30,40);  
    block11 = new Block(310,275,30,40);
    block12 = new Block(340,275,30,40);
    block13 = new Block(370,275,30,40);
    block14 = new Block(400,275,30,40);
    block15= new Block(430,275,30,40);
    block16= new Block(460,275,30,40);
   
    
    block18= new Block(310,235,30,40);
    block19 = new Block(340,235,30,40);
    block20 = new Block(370,235,30,40);
    block21 = new Block(400,235,30,40);
    block22 = new Block(430,235,30,40);
 
    
    block24 = new Block(340,195,30,40);
    block25 = new Block(370,195,30,40);
    block26 = new Block(400,195,30,40);
  
    
    block28 = new Block(370,155,30,40);
    


    block1=new Block(730,150,30,40);
    block2=new Block(760,150,30,40);
    block3=new Block(790,150,30,40);
    block4=new Block(820,150,30,40);
    block5=new Block(850,150,30,40);

    block6=new Block(760,100,30,40);
    block7=new Block(790,100,30,40);
    block8=new Block(820,100,30,40);
    block9=new Block(790,90,30,40);

    ground=new Ground(500,490,1000,20);

    ground1 = new Ground(380,350,270,10);
    ground2 = new Ground(800,210,200,10);

    polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:120,y:200});

    
}
function draw(){
  background("red");
  
rectMode(CENTER);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("orange")


block6.display();
block7.display();
block8.display();
block9.display();
fill("blue")


block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
fill("pink")

block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
fill("purple")

block24.display();
block25.display();
block26.display();
fill("blue")

block28.display();




ground.display();
ground1.display();
ground2.display();



textSize(15)
stroke(15)
fill("white")
text("drag the hexagonal stone and release it, to launch it towards the blocks",50,50);


imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

slingshot.display();


drawSprites();

}
function mouseDragged(){
   Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
  if(keyCode==32){
      slingshot.attach(this.polygon);
  }
}
