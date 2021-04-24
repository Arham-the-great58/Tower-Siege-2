const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform1,platform2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var ba1,ba2,ba3,ba4,ba5,ba6,ba7,ba8,ba9,ba10,ba11,ba12,ba13,ba14,ba15,ba16;
var slingshot,polygon;
 
 
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    // ground
    ground = new Ground(600,580,1200,20);
    // the platforms
    platform1 = new Ground(520,410,300,20);
    platform2 = new Ground(820,280,300,20);
    // first layer of blocks
    b1 = new Box(420,320,30,40);
    b2 = new Box(450,320,30,40);
    b3 = new Box(480,320,30,40);
    b4 = new Box(510,320,30,40);
    b5 = new Box(540,320,30,40);
    b6 = new Box(570,320,30,40);
    b7 = new Box(600,320,30,40);
    // second layer of blocks
    b8 = new Box(450,260,30,40);
    b9 = new Box(480,260,30,40);
    b10 = new Box(510,260,30,40);
    b11 = new Box(540,260,30,40);
    b12 = new Box(570,260,30,40);
    // 3rd layer
    b13 = new Box(480,200,30,40);
    b14 = new Box(510,200,30,40);
    b15 = new Box(540,200,30,40);
    //last layer
    b16 = new Box(510,140,30,40);

        // first layer of blocks
        ba1 = new Box(720,260,30,40);
        ba2 = new Box(750,260,30,40);
        ba3 = new Box(780,260,30,40);
        ba4 = new Box(810,260,30,40);
        ba5 = new Box(840,260,30,40);
        ba6 = new Box(870,260,30,40);
        ba7 = new Box(900,260,30,40);
        // second layer of blocks
        ba8 = new Box(750,200,30,40);
        ba9 = new Box(780,200,30,40);
        ba10 = new Box(810,200,30,40);
        ba11 = new Box(840,200,30,40);
        ba12 = new Box(870,200,30,40);
        // 3rd layer
        ba13 = new Box(780,140,30,40);
        ba14 = new Box(810,140,30,40);
        ba15 = new Box(840,140,30,40);
        //last layer
        ba16 = new Box(810,80,30,40);

        //polygon
        polygon = new Polygon(200,200,50,50);
        slingshot = new SlingShot(polygon.body,{x:100,y:200});
}

function draw(){
background(110);
Engine.update(engine);
ground.display();

platform1.display();
platform2.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

ba1.display();
ba2.display();
ba3.display();
ba4.display();
ba5.display();
ba6.display();
ba7.display();
ba8.display();
ba9.display();
ba10.display();
ba11.display();
ba12.display();
ba13.display();
ba14.display();
ba15.display();
ba16.display();

slingshot.display();

polygon.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode===32){

        slingshot.attach(polygon.body);

    }

}