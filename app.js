let firstCard = 5;
let secondCard = 11;
let cards = [firstCard,secondCard] //array - order list of items
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.querySelector("#card-el");

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
  cardEl.textContent = "Cards:" + " " + cards[0] + " " + cards[1] ;
}
function startGame(){
  renderGame();
}
function newCard() {
  var thirdCard = 5;
  cards.push(thirdCard)
  console.log(cards)
  sum += thirdCard;
  renderGame();
}


