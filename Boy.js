class MBoy {
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1,
            density:0.3,
            isStatic:true,
        }
        this.image=loadImage("sprites/boy.png");

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;

        

    }
    display(){
        var pos =this.body.position ;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        //rectMode(CENTER);
         //rect(0,0,this.width,this.height);
         imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
         pop();
        
         
    }
}