class Rope{

    constructor(bodyA, bodyB){
        var options = {
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness:0.04,
            length:10
    
        }
    
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);

    }

    display(){
       var pointA =  this.Rope.bodyA.position;
       var pointB =  this.Rope.bodyB.position;
        
        

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }


}