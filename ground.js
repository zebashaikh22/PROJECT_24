class Ground{
    constructor(x,y,w,h){
        var ground_options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y,400,20, ground_options);
        this.width = 400;
        this.height = 20;
        
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
      }
    };
