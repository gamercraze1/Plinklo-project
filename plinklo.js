class Plinklo{
    constructor(x,y,r){
        var option={restitution:1,isStatic:true,friction:0}
        this.body=Bodies.circle(x,y,r,option)
        this.r=10;
        
        World.add(world,this.body)
    }
    Display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke(); 
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();

    }
}

