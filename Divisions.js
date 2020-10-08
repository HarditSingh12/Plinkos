class Divisions{
    constructor(x,y,width,height){
      
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
        this.width = 9
        this.height = 270;
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
   
}