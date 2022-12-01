window.onload = function () {
  const canvas = document.getElementById("canvas");
  // delete canvas
  //const ctx = canvas.getContext("2d");
  const startPage = document.getElementById("start-page");
  const startButton = document.getElementById("start");
  const guessButton = document.getElementById("guess-btn");
  const restartButton = document.getElementById("restart-btn");
  const restartButton2 = document.getElementById("restart-btn-lose");
  const discardBtn = document.getElementsByClassName("discard-btn");
  var arrButtons = [...discardBtn];

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
  // discardBtn.onclick = function () {
  //   console.log('click');
  //   if (discardBtn.classList.contains('white')) {
  //     discardBtn.classList.replace('white', 'red')
  //   } else if (discardBtn.classList.contains('red')) {
  //     discardBtn.classList.replace('red', 'green')
  //   } else {
  //     discardBtn.classList.replace('green','white')
  //   }
  // }
};
