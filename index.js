var randomNumber1 = Math.ceil(Math.random() * 6);
var randomImage = "dice" + randomNumber1 + ".png";
document.querySelector(".dice img").setAttribute("src", randomImage);

var randomNumber2 = Math.ceil(Math.random() * 6);
var randomImage2 = "dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
