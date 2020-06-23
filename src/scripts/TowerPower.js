import Tower from './Tower'

class TowerPower extends Tower {
    constructor(ctx, coords, type){
        super(ctx, coords, type);
        this.damage = 10;
        this.speed = 10;
        this.cost = 200;
    }
    draw(){
        this.ctx.strokeStyle = "#d4d9d2";
        this.ctx.fillStyle = "#ad1313";
        this.ctx.fillRect(...this.coords);
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#ff871f"
    }
    attack(enemy, game){
        super.attack(enemy, game);
    }
}
export default TowerPower;