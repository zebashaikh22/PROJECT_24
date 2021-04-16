class Dustbin{
    constructor(x,y){
        var options = {
            restitution:0.3,
        }

        this.body = Bodies.rectangle(x, y,100,20, options);
        this.width = 100;
        this.height = 20;


        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        
      }
}