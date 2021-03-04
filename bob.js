class bob{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8,
            friction : 0.5,
            density : 0.8
        }
        this.body = Bodies.circle(x,y,width,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;        
    }

    display(){
        ellipseMode(RADIUS);
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}