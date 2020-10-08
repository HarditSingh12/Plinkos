class Plinko{
    constructor(x,y){
      var options = {
       'isStatic':true,
       restitution:1

      }  
      this.body = Bodies.circle(x,y,10,options);
     this.body.shapeColor = color("white");
      
      this.radius = 10;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop()

    }
    
}