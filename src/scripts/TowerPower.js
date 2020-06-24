import Tower from './Tower'

class TowerPower extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 10;
        this.speed = 50;
        this.cost = 200;
    }
    draw(image){
        super.draw(image);

    }
    attack(enemy, game){
        super.attack(enemy, game);
    }
}
export default TowerPower;