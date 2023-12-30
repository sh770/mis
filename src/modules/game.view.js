const enemyBarElement = document.querySelector("#enemy-hp-bar");
const userBarElement = document.querySelector("#user-hp-bar");
const enemyHpElement = document.querySelector("#enemy-hp");
const userHpElement = document.querySelector("#user-hp");
const buttonElement = document.querySelector("button");
const headerElement = document.querySelector("header");

export const renderHpBars = (enmeyHp, userHp, isUserTurn) => {
  enemyBarElement.style.width = enmeyHp + "%";
  userBarElement.style.width = userHp + "%";
  console.log(userBarElement.style.width)
  console.log(5555);
  enemyHpElement.innerHTML = ` חיים ${enmeyHp}`;
  userHpElement.innerHTML = ` חיים ${userHp}`;
  buttonElement.innerHTML = isUserTurn ? "ממתין" : "תקיפה";
};
export const rederWinerText = (winerName) => {
  headerElement.innerHTML = ` המנצח הוא ${winerName}`;
};

export const renderInitialState = () => {
  enemyBarElement.width = 100 + "%";
  userBarElement.width = 100 + "%";
  enemyHpElement.innerHTML = " חיים 100 ";
  userHpElement.innerHTML = " חיים 100 ";
  buttonElement.innerHTML = "תקיפה";
  headerElement.innerHTML = "משחק לחימה";
};
