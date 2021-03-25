class Rope{
    constructer(body1,body2,offsetX,offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:bodyB,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

}
