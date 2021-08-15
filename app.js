let firstCard=10;
let secondCard=10;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackjack =false;
let message = "";
function startgame(){
if (sum<=20){
 message= "do you want to draw a new card ? 🙂"
}
else if (sum===21){
 message = "wohoo ! you've got the blackjack! 🥳";
 hasBlackjack=true;
}
else {
 message = "you're out of the game ! 😭";
 isAlive=false;
}
console.log(message);
}
