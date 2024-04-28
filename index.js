let addOneHome = document.getElementById("resultHome");
let addOneGuest = document.getElementById("resultGuest");
let resultHBord = document.getElementById("resultHomeBord");
let countOne = 0;

function addOneHomeFun() {
  countOne += 1;
  addOneHome.textContent = countOne;
}

function addOneGuestFun() {
  countOne += 1;
  addOneGuest.textContent = countOne;
}

function addTwoHomeFun() {
  countOne += 2;
  addOneHome.textContent = countOne;
}

function addTwoGuestFun() {
  countOne += 2;
  addOneGuest.textContent = countOne;
}

function addThreeHomeFun() {
  countOne += 3;
  addOneHome.textContent = countOne;
}

function addThreeGuestFun() {
  countOne += 3;
  addOneGuest.textContent = countOne;
}

function resetGame() {
  addOneHome.textContent = 0;
  ddOneGuest.textContent = 0;
}
