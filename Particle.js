class Particle{
    constructor(x,y){
      
     this.body = Bodies.circle(x,y,20,{restitution:0.4});
     //this.body.shapeColor = color("white");
      
      this.radius =10;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius);
       

    }
    
}