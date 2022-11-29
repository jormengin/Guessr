class Game {
  constructor(maxAttempts = 10) {
    this.secretNumber = [];
    this.maxAttempts = maxAttempts;
    this.userAttempts = 0;
    this.userScore = 0;
    this.id = 1;
  }

  start() {
    console.log("holi start");
    this._generateRandomNumber();
    document.getElementById("start-page").style = "display: none";
  }

  checkAttempt() {
    this.userAttempts++;
    let mates = 0;
    let checks = 0;
    const guesses = document
      .getElementsByClassName("guess-input")[0]
      .value.split("");
    const guessArr = guesses.map((str) => {
      return Number(str);
    });
    if (guesses.length !== 4) {
      alert("Introduce a valid number!");
      return
    }
    for (let i = 0; i < guessArr.length; i++) {
      if (
        this.secretNumber.includes(guessArr[i]) &&
        this.secretNumber[i] === guessArr[i]
      ) {
        mates++;
      } else if (this.secretNumber.includes(guessArr[i])) {
        checks++;
      } 
      console.log(`Mates:${mates}, Checks:${checks}`);
    }
    if (mates === 4) {
      alert("Omg you win 🎉🎉!");
    }
    this._createNewRow();
    document.getElementById("attempts-user").innerHTML = this.userAttempts;
    this._checkIfLost();
  }
  _createNewRow() {
  id = id + 1;
  const newRow = document.createElement('tr');
  newRow.id = id;
  newRow.innerHTML = `Mates:${mates}, Checks:${checks}`
  tbody.appendChild(newRow);
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
