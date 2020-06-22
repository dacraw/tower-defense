import Castle from './Castle'
import Tower from './Tower'
import Enemy from './Enemy'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import Timer from './Timer'
import Battlefield from './Battlefield'

class Game {
    constructor(){
        this.level = 1;
        this.score = 0;
        this.resources = 0;
        this.health = 100;
        this.towerTypes = ["Basic", "Power", "Splash"];
        this.spawn = false;
        this.battlefield = new Battlefield();
        this.leftBar = new LeftBar(this.towerTypes, this.resources);
        this.rightBar = new RightBar();
    }
    initialize(){
        
        this.battlefield.initialize();
        this.battlefield.render();
        this.leftBar.render();
        for (let i = 0; i < this.towerTypes.length; i++){
            document.querySelector(`.${this.towerTypes[i]}`).addEventListener('click', () => this.battlefield.createTower(this.towerTypes[i]))
        }

        // debugger
        const resourceTick = setInterval(this.generateResources.bind(this), 10)
        
        this.rightBar.render();
    }
    generateResources(){
        debugger
        this.resources += 1;
        const resources = document.querySelector('.current-resources');
        resources.innerText = this.resources;
    }
    
    startTimer(remaining){
        this.timer = new Timer(remaining);
        this.timer.render();
    }
    clearTimer(){
        this.timer.clear();
    }
}

export default Game;