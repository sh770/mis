import * as view from "./game.view.js";

let enmeyHp = 100;
let userHp = 100;
let isUserTurn = true;
let isGameRunning = true;

const MAX_DMG = 50;
const generateRandomDamage = () => Math.floor(Math.random() * MAX_DMG);

export const attack = () => {
  if (isUserTurn && isGameRunning) {
    reduceEnemyHp();
  }
};

const reduceEnemyHp = () => {
  enmeyHp -= generateRandomDamage();
  console.log("Enemy Hp left wite:", enmeyHp);
  view.renderHpBars(enmeyHp, userHp, isUserTurn);
  checkWinerState();
  switchTurns();
  setEnemyTimeAttack();
};

const checkWinerState = () => {
  const winer = userHp <= 0 ? "המחשב" : enmeyHp <= 0 ? "אנחנו" : null;
  
  if (winer) {
    view.renderHpBars(enmeyHp, userHp, isUserTurn);
    isGameRunning = false;
    view.rederWinerText(winer);
    setTimeout(() => {
      resetGamesSetings();
    }, 15000);
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
  // console.log(isUserTurn);
};

const setEnemyTimeAttack = () => {
  setTimeout(() => {
    if (isGameRunning && enmeyHp > 0) {
      userHp -= generateRandomDamage();
      view.renderHpBars(enmeyHp, userHp, isUserTurn);
      checkWinerState();
      console.log("User Hp left wite:", userHp);
      switchTurns();
    }
  }, 2000);
};
