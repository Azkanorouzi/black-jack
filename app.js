let firstCard=10;
let secondCard=10;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackjack =false;
let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.querySelector(".sum-el");
let cards = document.querySelector("#card-el");

function startgame(){
  if (sum<=20){
   message= "do you want to draw a new card ?"
  }
  else if (sum===21){
   message = "you've got the blackjack!";
   hasBlackjack=true;
  }
  else {
   message = "you're out of the game !";
   isAlive=false;
  }
 var cardss = " " + firstCard + " " + secondCard;
  messageEl.textContent=message;
 sumEl.innerText = "Sum : "+" " + sum;
 cards.textContent ="Cards:" + " " + cardss;
}
