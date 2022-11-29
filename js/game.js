class Game {
  constructor(maxAttempts = 10) {
    this.secretNumber = [];
    this.maxAttempts = maxAttempts;
    this.userAttempts = 0;
    this.userScore = 0;
    this.id = 0;
    this.tbody = document.getElementById('solution-table');
    this.mates = 0;
    this.checks = 0;
    this.guesses = 0;
  }

  start() {
    console.log("holi start");
    this._generateRandomNumber();
    document.getElementById("start-page").style = "display: none";
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
      return
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
      console.log(`${this.guesses} Mates:${this.mates}, Checks:${this.checks}`);
    }
    if (this.mates === 4) {
      alert("Omg you win 🎉🎉!");
    }
    document.getElementById("attempts-user").innerHTML = this.userAttempts;
    this._createNewRow();
    this._checkIfLost();
  }
  _createNewRow() {
  this.id = this.id + 1;
  const newRow = document.createElement('tr');
  newRow.id = this.id;
  newRow.innerHTML = `${this.guesses.join('')} Mates:${this.mates}, Checks:${this.checks}`
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
