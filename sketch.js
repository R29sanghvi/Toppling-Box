const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myEngine, myWorld, ground , ball,box1 ,box2;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;
    
    

var ball_options={restitution:1}

    ball=Bodies.circle(300,300,15,ball_options);
    var ground_options={
        isStatic: true
    }
    ground=Bodies.rectangle(200,395,400,10,ground_options);
    World.add(myWorld,ground);
    World.add(myWorld,ball);
    
   
    box1=new Box(20,300,40,20);
    box2=new Box(300,50,50,20);

    
}
   
function draw(){
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
    ellipseMode(RADIUS); 
    
ellipse(ball.position.x,ball.position.y,15,15);
rect(ground.position.x,ground.position.y,400,10);

box1.displayBox();
box2.displayBox();
}
