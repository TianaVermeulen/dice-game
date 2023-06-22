function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomNumber3 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = document
    .querySelector("img.img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  var randomDiceImage2 = document
    .querySelector("img.img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
  var randomDiceImage3 = document
    .querySelector("img.img3")
    .setAttribute("src", "images/dice" + randomNumber3 + ".png");

  var playerDraw1And2 = randomNumber1 == randomNumber2;
  var playerDraw1And3 = randomNumber1 == randomNumber3;
  var playerDraw2And3 = randomNumber2 == randomNumber3;

  if (
    randomNumber3 == randomNumber1 &&
    randomNumber3 == randomNumber2 &&
    randomDiceImage1 == randomDiceImage2
  ) {
    document.querySelector("h1").textContent = "Draw";
  } else if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 3 Wins! 🚩";
  } else if (
    randomNumber1 == randomNumber2 &&
    randomNumber1 !== randomNumber3 &&
    randomNumber2 !== randomNumber3
  ) {
    document.querySelector("h1").textContent = "Player 3 Loses! 🚩";
  } else if (
    randomNumber1 == randomNumber3 &&
    randomNumber1 !== randomNumber2 &&
    randomNumber3 !== randomNumber2
  ) {
    document.querySelector("h1").textContent = "Player 2 Loses! 🚩";
  } else if (
    randomNumber2 == randomNumber3 &&
    randomNumber2 !== randomNumber1 &&
    randomNumber3 !== randomNumber1
  ) {
    document.querySelector("h1").textContent = "Player 1 Loses! 🚩";
  }
}

document.addEventListener("keydown", rollDice);
document.addEventListener("click", rollDice);

rollDice();

// For two players

// if (randomNumber1>randomNumber2) {
//     document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
// } else if (randomNumber2>randomNumber1) {
//     document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
// } else {
//     document.querySelector("h1").textContent = "Draw!";
// };
