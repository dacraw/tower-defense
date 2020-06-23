import Game from './scripts/Game'
import Battlefield from "./scripts/Battlefield";
import LeftBar from './scripts/LeftBar'
import Timer from "./scripts/Timer";
import './styles/index.scss'

// const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });


const main = () => {
  // initial load
  const game = new Game();
  game.initialize();

  let requestId;
  
  document.querySelector('.start-button').addEventListener('click', () => startGame());
  function intro(){
    game.animateIntro();
    requestAnimationFrame( intro );
    game.renderer.render( game.scene, game.camera );
  }
  intro();

  const startGame = () => {
    const bf = game.battlefield;
      // 
      let animating = true;
      let spawning = true;

      const animation = () => {
        if (game.health <= 0){
          
          // game.lose(requestId);
          game.lose();
          return;
        }
          // 
          const towers = bf.towers;
          if (Object.keys(towers).length){
            Object.keys(towers).forEach(towerKey => {
              bf.drawTowers(towerKey);
            })
          }
          const timer = game.timer;
          if (!timer && game.health > 0){
            game.newRound(0);

          } else if (timer.remaining < 0) {
       
          
            timer.clear();
            if (!Object.keys(bf.enemies).length) bf.createEnemies(game.level);
            bf.animateField(game);
            if (game.health <= 0) game.lose();
            if (Object.keys(bf.enemies).length <= 0) {
              game.newRound(0);
            }
          }
            requestId = window.requestAnimationFrame(animation);
        }
        
      
      requestId = window.requestAnimationFrame(animation);
    }
}

window.addEventListener("DOMContentLoaded", main);

