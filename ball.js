class Ball{
    constructor(x,y){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y,15, options);
        this.radius = 15;
        
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        
      }
}