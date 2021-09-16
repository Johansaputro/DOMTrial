var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var string1 = String(randomNumber1);
var string2 = String(randomNumber2);

var text1 = "images/dice" + string1 + ".png"
var text2 = "images/dice" + string2 + ".png"

if (randomNumber1 === randomNumber2) {
  document.getElementById("status").textContent = "Draw"
}
else {
  if (randomNumber1 > randomNumber2) {
    document.getElementById("status").textContent = "Player 1 Wins"
  }
  else {
    document.getElementById("status").textContent = "Player 2 Wins"
  }
}

document.querySelector(".img1").src=text1
document.querySelector(".img2").src=text2
