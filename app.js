 
let cards = [] //array - order list of items
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.querySelector("#card-el");
let players = {
  Name:"user-1",
  Chips:100,
  sayHello: function(){
    console.log("heisann")
  }
};
players.sayHello();
let playerEl = document.getElementById("player-el");
playerEl.textContent = players.Name + ": $" + players.Chips ;
function randomCard(){
var rCard = Math.floor(Math.random()*13) + 1
 if (rCard > 10) {
    return 10
  }
  else if (rCard === 1){
  return 11 
}
else {
  return rCard ;
}

}
function startGame() {
  if ( sum == 0 )
  {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard , secondCard];
  sum = firstCard + secondCard;
  renderGame();
  }
}

function renderGame() {

  if (sum <= 20) {
    message = "do you want to draw a new card ?"
  }
  else if (sum === 21) {
    message = "you've got the blackjack!";
    hasBlackjack = true;
  }
  else {
    message = "you're out of the game !";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.innerText = "Sum : " + " " + sum;
  for (var a = 0; a < 2 ; a++){
    cardEl.textContent += cards[a] + " ";
  }

}

function newCard() {
  if (isAlive === true && hasBlackjack === false){
        var thirdCard = randomCard();
        cardEl.textContent += thirdCard + " ";
        sum += thirdCard;
        sumEl.innerText = "Sum : " + " " + sum;
        if (sum <= 20) {
          message = "do you want to draw a new card ?"
        }
        else if (sum === 21) {
          message = "you've got the blackjack!";
          hasBlackjack = true;
        }
        else {
          message = "you're out of the game !";
          isAlive = false;
        }
  messageEl.textContent = message;
}
} 
 





