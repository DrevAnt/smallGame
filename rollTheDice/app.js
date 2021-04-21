function rollTheDice() {
  let randomNumb1 = Math.floor(Math.random() * 6) + 1;
  let randomNumb2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumb1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumb2 + ".png");

  if (randomNumb1 === randomNumb2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumb1 < randomNumb2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!";
  } else {
    document.querySelector("h1").innerHTML = "Player 1 WINS!";
  }
}
