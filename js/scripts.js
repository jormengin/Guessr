window.onload = function () {
  const startPage = document.getElementById("start-page");
  const startButton = document.getElementById("start");
  const guessButton = document.getElementById("guess-btn");
  const wordGuessButton = document.getElementById('guess-btn-words');
  const restartButton = document.getElementById("restart-btn");
  const restartButton2 = document.getElementById("restart-btn-lose");
  const discardBtn = document.getElementsByClassName("discard-btn");
  const wordStartButton = document.getElementById('word-start-btn')
  var arrButtons = [...discardBtn];

  startButton.onclick = function () {
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    const game = new Game();
    guessButton.onclick = function () {
      game.checkAttempt();
    };
    game.start();
  }
  
  wordStartButton.onclick = function () {
    startPage.style = "display: none";
    document.getElementById("wordl-page").classList.toggle("shown");
    const wordGame = new Game();
    wordGuessButton.onclick = function () {
      wordGame.checkWord();
    };
    wordGame.wordStart();
  }
  
  restartButton.onclick = function () {
    location.reload();
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  };
  restartButton2.onclick = function () {
    location.reload();
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  };
  arrButtons.forEach((element) => {
    element.addEventListener("click", () => {
      console.log('click');
      console.log(element);
      if (element.classList.contains('white')) {
        element.classList.replace('white', 'red')
      } else if (element.classList.contains('red')) {
        element.classList.replace('red', 'green')
      } else {
        element.classList.replace('green', 'white')
      }
    });
  })
};
