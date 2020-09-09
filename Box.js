class Box{
    constructor(x,y,w,h){
    this.body=Bodies.rectangle(x,y,w,h); 
    this.width=w
    this.height=h
    World.add(myWorld,this.body);
    }
    displayBox(){
        push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("blue");
    rect(0,0,this.width,this.height);
pop();
    }
}