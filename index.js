//rolling the player1's dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

//rolling the player2's dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//changing the title about who win
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
} 

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").style.color = "red";
    document.querySelector("h1").innerHTML = "Player 2 Win";
} 

else {
    document.querySelector("h1").style.color = "pink";
    document.querySelector("h1").innerHTML = "Draw!";
}