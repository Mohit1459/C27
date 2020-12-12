class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0,
            length: 10
        }
       this.chain =  Constraint.create(options);
       World.add(world,this.chain);
    
    }
}