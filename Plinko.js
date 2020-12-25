class Plinko {
    constructor (x, y){
     var options={
         isStatic :true
     }
        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y= y;
        

        World.add(world, this.body);
    }

    display(){
        push();
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.x, this.y, 20, 20);
    pop();
    }

} 