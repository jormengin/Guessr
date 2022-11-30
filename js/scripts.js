window.onload = function () {
  const canvas = document.getElementById("canvas");
  // delete canvas
  //const ctx = canvas.getContext("2d");
  const startPage = document.getElementById("start-page");
  const startButton = document.getElementById("start");
  const guessButton = document.getElementById("guess-btn");
  const restartButton = document.getElementById("restart-btn");
  const discardBtn = document.getElementsByClassName("discard-btn");

  startButton.onclick = function () {
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    const game = new Game();
    guessButton.onclick = function () {
      game.checkAttempt();
    };
    game.start();
  };

  restartButton.onclick = function () {
    location.reload();
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  };
  discardBtn.onclick = function () {
    console.log('discard button')
    discardBtn.style.backgroundColor = "salmon";
    discardBtn.style.backgroundColor = "black";
    discardBtn.style.backgroundColor = "white";
  };
};
