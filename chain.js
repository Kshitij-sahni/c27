class chain{
    constructor(bodyA,bodyB,xOffset){
        this.xOffset = xOffset;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : xOffset, y : 0}
        }

        this.chain1 = Constraint.create(options);
        World.add(world,this.chain1);
    }

    display(){
        var pp = this.chain1.bodyB.position.x + this.xOffset;
        stroke("white");
        line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,pp,this.chain1.bodyB.position.y,);
    }
}