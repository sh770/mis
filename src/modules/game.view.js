const enemyBarElement = document.querySelector("#enemy-hp-bar");
const userBarElement = document.querySelector("#user-hp-bar");
const enemyHpElement = document.querySelector("#enemy-hp");
const userHpElement = document.querySelector("#user-hp");
const buttonElement = document.querySelector("button");
const headerElement = document.querySelector("header");

export const renderHpBars = (enmeyHp, userHp, isUserTurn, isGameRunning) => {
  enemyBarElement.style.width = enmeyHp + "%";
  userBarElement.style.width = userHp + "%";
  enemyHpElement.innerHTML = ` חיים ${enmeyHp}`;
  userHpElement.innerHTML = ` חיים ${userHp}`;
  // console.log("התור של המחשב :", isUserTurn);
  // if (!isGameRunning) {
  //   buttonElement.innerHTML = "המשחק נגמר";
  //   buttonElement.disabled = true;
  // } else {
  //   buttonElement.disabled = false;
  // }
  buttonElement.innerHTML = isUserTurn ? "ממתין" : "תקיפה";
  if (buttonElement.innerHTML === "ממתין") {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};
export const rederWinerText = (winerName) => {
  buttonElement.innerHTML = ` המנצח הוא ${winerName}`;
  headerElement.innerHTML = ` המנצח הוא ${winerName}`;
  buttonElement.disabled = false;
};

export const renderInitialState = () => {
  enemyBarElement.style.width = 100 + "%";
  userBarElement.style.width = 100 + "%";
  enemyHpElement.innerHTML = " חיים 100 ";
  userHpElement.innerHTML = " חיים 100 ";
  buttonElement.innerHTML = "התחל שוב";
  headerElement.innerHTML = "משחק לחימה";
  buttonElement.disabled = false;
};
