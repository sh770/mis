import * as view from "./game.view.js";

let enmeyHp = 100;
let userHp = 100;
let isUserTurn = true;
let isGameRunning = true;

const MAX_DMG = 100;

// const MIN_DMG =(generateRandomDamage)=>{
//   if(generateRandomDamage < enmeyHp && generateRandomDamage < userHp){

//   }
// }

const generateRandomDamage = () => Math.floor(Math.random() * MAX_DMG);

export const attack = () => {
  if (isUserTurn && isGameRunning) {
    reduceEnemyHp();
  }
};

const reduceEnemyHp = () => {
  enmeyHp -= generateRandomDamage();
  if (enmeyHp <= 0) {
    enmeyHp = 0;
    // console.log("enmeyHp", 0);
  }
  view.renderHpBars(enmeyHp, userHp, isUserTurn,isGameRunning);
  console.log("Enemy Hp left wite:", enmeyHp);
  checkWinerState();
  switchTurns();
  setEnemyTimeAttack();
};

const checkWinerState = () => {
  const winer = userHp <= 0 ? "המחשב" : enmeyHp <= 0 ? "השחקן" : null;

  if (winer) {
    // isUserTurn = false;
    isGameRunning = false;
    view.rederWinerText(winer);
    setTimeout(() => {
      resetGamesSetings();
    }, 5000);
  }
};

const resetGamesSetings = () => {
  enmeyHp = 100;
  userHp = 100;
  isUserTurn = true;
  isGameRunning = true;
  view.renderInitialState();
};

const switchTurns = () => {
  isUserTurn = !isUserTurn;
};

const setEnemyTimeAttack = () => {
  setTimeout(() => {
    if (isGameRunning && enmeyHp > 0) {
      // userHp = 0;
      userHp -= generateRandomDamage();
      if (userHp <= 0) {
        userHp = 0;
      }
      view.renderHpBars(enmeyHp, userHp, isUserTurn,isGameRunning);
      console.log("User Hp left wite:", userHp);
      checkWinerState();
      switchTurns();
    }
  }, 2000);
};
