class NumberGame extends Game {
  constructor() {
    super();
    this.secretNumber = [];
    this.userAttempts = 0;
    this.id = 0;
    this.tbody = document.getElementById("solution-table");
    this.mates = 0;
    this.checks = 0;
    this.guesses = 0;
    this.discardBtn = document.getElementsByClassName("discard-btn")[0];
    this.solutions = "";
    this.correctNumbers = 0;
  }
  start() {
    this._generateRandomNumber();
    document.getElementById("start-page").style = "display: none";
    muteBtn.onclick = () => {
      this.mutePage();
    };
    this._timer();
  }
  checkAttempt() {
    this.correctNumbers=0
    this.solutions = "";
    this.userAttempts++;
    this.guesses = document
      .getElementsByClassName("guess-input")[0]
      .value.split("");
    const guessArr = this.guesses.map((str) => {
      return Number(str);
    });
    if (this.guesses.length !== 4) {
      alert("Introduce a valid number!");
      return;
    }
    for (let i = 0; i < guessArr.length; i++) {
      if (
        this.secretNumber.includes(guessArr[i]) &&
        this.secretNumber[i] === guessArr[i]
      ) {
        this.solutions += "🟢";
        this.correctNumbers++;
      } else if (this.secretNumber.includes(guessArr[i])) {
        this.solutions += "🟡";
      } else {
        this.solutions += "🔴";
      }
    }
    if (!this.mute === true) {
      pencil.play();
    }
    this._getScore();
    document.getElementById("score").innerHTML = this.score;
    this._createNewRow();
    this._checkIfWin();
    this._checkIfLost();
    console.log(this.score)
  }
  ///////

  checkAttempt2() {
    this.mates = 0;
    this.checks = 0;
    this.userAttempts++;
    this.guesses = document
      .getElementsByClassName("guess-input")[0]
      .value.split("");
    const guessArr = this.guesses.map((str) => {
      return Number(str);
    });
    if (this.guesses.length !== 4) {
      alert("Introduce a valid number!");
      return;
    }
    for (let i = 0; i < guessArr.length; i++) {
      if (
        this.secretNumber.includes(guessArr[i]) &&
        this.secretNumber[i] === guessArr[i]
      ) {
        this.mates++;
        this.correctNumbers++;
        console.log(this.mates)
      } else if (this.secretNumber.includes(guessArr[i])) {
        this.checks++;
        console.log(this.checks)
      } 
      this.solutions = `🟢${this.mates} 🟡${this.checks}`;
    }
    if (!this.mute === true) {
      pencil.play();
    }
    this._getScore();
    document.getElementById("score").innerHTML = this.score;
    this._createNewRow();
    this._checkIfWin();
    this._checkIfLost();
  }

  ////////
  _checkIfWin() {
    if (this.mates === 4 || this.correctNumbers === 4) {
      setTimeout(() => {
        document.getElementById("main-page").style = "display: none";
        document.getElementById("win-page").style = "display:flex";
        document.getElementById("score-win").innerHTML = this.score;
        this.secretNumber = [];
        this.start();
      },1200)
    }
  }
  _createNewRow() {
    this.id = this.id + 1;
    const newRow = document.createElement("tr");
    const newTurn = document.createElement("td");
    const newPlay = document.createElement("td");
    const solutions = document.createElement("td");
    newRow.id = this.id;
    newPlay.innerHTML = this.guesses.join("");
    newTurn.innerHTML = this.userAttempts;
    solutions.innerHTML = this.solutions;
    newRow.appendChild(newTurn);
    newRow.appendChild(newPlay);
    newRow.appendChild(solutions);
    this.tbody.appendChild(newRow);
  }
  _generateRandomNumber() {
    const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * arrNumbers.length);
      this.secretNumber.push(arrNumbers[randomIndex]);
      arrNumbers.splice(randomIndex, 1);
      console.log(this.secretNumber);
    }
  }
  _checkIfLost() {
    if (this.userAttempts === 10) {
      setTimeout(() => {
        document.getElementById("main-page").style = "display: none";
        document.getElementById("lose-page").style = "display:flex";
      }, 1200);
    }
  }
}
