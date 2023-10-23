var randonNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImg = "dice" + randonNumber1 + ".png"; //dice1-dice6.png

var randomImgSource = "images/" + randomDiceImg; //images/dice1-images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if (randonNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randonNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draws ";
}
