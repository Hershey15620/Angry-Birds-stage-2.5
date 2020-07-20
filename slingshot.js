class Slingshot {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1.0,
            length:10
    }
    this.band=Constraint.create(options);
    World.add(world,this.band)
    }

    
    
    
    display(){
        var pointA=this.band.bodyA.position;
        var pointB=this.band.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }

}