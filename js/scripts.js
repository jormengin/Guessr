window.onload = function () {
  const startPage = document.getElementById("start-page");
  const difficultyPage = document.getElementById('select-difficulty-page');
  const languagePage = document.getElementById("select-language-page-words");
  const startButton = document.getElementById("start");
  const guessButton = document.getElementById("guess-btn");
  const wordGuessButton = document.getElementById('guess-btn-words');
  const restartButton = document.getElementById("restart-btn");
  const difficultButton = document.getElementById("difficult-btn");
  const restartBtnLanguage = document.getElementById('restart-language-btn');
  const selectLanguageBtn = document.getElementById("select-language-btn");
  const restartButton2 = document.getElementById("restart-btn-lose");
  const restartButtonWin = document.getElementById('restart-btn-win');
  const discardBtn = document.getElementsByClassName("discard-btn");
  const wordStartButton = document.getElementById('word-start-btn');
  const puzzleGameBtn = document.getElementById("puzzle-game-btn");
  const wordStartBtnSpanish = document.getElementById("spanish-btn");
  const restartButtonDifficulty = document.getElementById('restart-difficulty');
  const selectDifficultyBtn = document.getElementById('select-difficulty-btn');
  var arrButtons = [...discardBtn]
  const keyboardBtn = document.getElementsByClassName('keyboard-button')
  var arrKeyboard = [...keyboardBtn];

  startButton.onclick = function () {
    difficultyPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    const numberGame = new NumberGame();
    guessButton.onclick = function () {
      numberGame.checkAttempt();
    };
    numberGame.start();
  }
  puzzleGameBtn.onclick = function () {
    startPage.style = "display: none";
    document.getElementById("puzzle-page").classList.toggle("shown");
    const puzzleGame = new PuzzleGame();
    guessButton.onclick = function () {
    };
    puzzleGame.puzzleStart();
  };

  difficultButton.onclick = function () {
    difficultyPage.style = "display:none";
    document.getElementById("main-page").classList.toggle("shown");
    const numberGame = new NumberGame();
    guessButton.onclick = function () { 
      numberGame.checkAttempt2();
    }
    numberGame.start();
  }
  selectDifficultyBtn.onclick = function () {
    startPage.style = "display: none";
    document.getElementById("select-difficulty-page").classList.toggle("shown");
    return false;
  };
  selectLanguageBtn.onclick = function () {
    console.log('pipi');
  startPage.style = "display: none";
  document
    .getElementById("select-language-page-words")
    .classList.toggle("shown");
  return false;
}
  wordStartButton.onclick = function () {
    languagePage.style = "display: none";
    document.getElementById("wordl-page").classList.toggle("shown");
    const wordGame = new Wordle();
    wordGuessButton.onclick = function () {
      wordGame.checkWord();
    };
    wordGame.wordStart();
  }
  wordStartBtnSpanish.onclick = function () {
    languagePage.style = "display: none";
    document.getElementById("wordl-page").classList.toggle("shown");
    const wordGame = new Wordle();
    wordGuessButton.onclick = function () {
      wordGame.checkWord();
    };
    wordGame.wordStartSpanish();
  };
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
  restartButtonWin.onclick = function () {
    location.reload();
    startPage.style = "display: none";
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  }
  restartButtonDifficulty.onclick = function () {
    location.reload();
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  };
  restartBtnLanguage.onclick = function () {
    location.reload();
    document.getElementById("main-page").classList.toggle("shown");
    return false;
  };

  arrButtons.forEach((element) => {
    element.addEventListener("click", () => {
      console.log('click prueba');
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

  arrKeyboard.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("click");
      console.log(element);
      if (element.classList.contains("white")) {
        element.classList.replace("white", "red");
      } else if (element.classList.contains("red")) {
        element.classList.replace("red", "green");
      } else if (element.classList.contains("green")) {
        element.classList.replace("green", "yellow");
      } else {
        element.classList.replace("yellow", "white");
      }
    });
  });
};
