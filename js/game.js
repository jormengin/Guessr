class Game {
  constructor(maxAttempts = 10) {
    this.secretNumber = [];
    this.maxAttempts = maxAttempts;
    this.userAttempts = 0;
    this.userScore = 0;
    this.id = 0;
    this.tbody = document.getElementById("solution-table");
    this.mates = 0;
    this.checks = 0;
    this.guesses = 0;
    this.discardBtn = document.getElementsByClassName("discard-btn")[0];
    this.currentTime = 0;
    this.intervalID = null;
    this.score = 0;
  }
  start() {
    this._generateRandomNumber();
    document.getElementById("start-page").style = "display: none";
    this._timer();
  }
 
  checkAttempt() {
    this.userAttempts++;
    this.mates = 0;
    this.checks = 0;
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
      } else if (this.secretNumber.includes(guessArr[i])) {
        this.checks++;
      }
    }
    console.log(this.score);
    this._getScore();
    document.getElementById("score").innerHTML = this.score;
    this._createNewRow();
    this._checkIfWin();
    this._checkIfLost();
  }
  _checkIfWin() {
    if (this.mates === 4) {
      document.getElementById("main-page").style = "display: none";
      document.getElementById("win-page").style = "display:flex";
      alert("Omg you win 🎉🎉!");
      this.secretNumber = [];
      this.start();
    }
  }
  _timer() {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  _getScore() {
    this.score = this.currentTime * this.userAttempts * 2;
  }
  _createNewRow() {
    this.id = this.id + 1;
    const newRow = document.createElement("tr");
    const newTurn = document.createElement("td");
    const newPlay = document.createElement("td");
    const newMates = document.createElement("td");
    const newChecks = document.createElement("td");
    newRow.id = this.id;
    newPlay.innerHTML = this.guesses.join("");
    newTurn.innerHTML = this.userAttempts;
    newMates.innerHTML = this.mates;
    newChecks.innerHTML = this.checks;
    newRow.appendChild(newTurn);
    newRow.appendChild(newPlay);
    newRow.appendChild(newMates);
    newRow.appendChild(newChecks);
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
      document.getElementById("main-page").style = "display: none";
      document.getElementById("lose-page").style = "display:flex";
      alert(`YOU LOSE!. The secret number was ${this.secretNumber.join("")}`);
    }
  }
}