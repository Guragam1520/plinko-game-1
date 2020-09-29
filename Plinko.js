class Plinko{
    constructor(x,y,r){
       
        
        this.r=r;

        this.body=Bodies.circle(x,y,this.r);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }
}