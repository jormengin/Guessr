class Game {
  constructor(maxAttempts = 10) {
    this.secretNumber = [];
    this.maxAttempts = maxAttempts;
    this.userAttempts = 0;
    // userScore
    this.UserScore = 0;
  }

  start() {
    // leave this only in script.js and move the call to generaterandomnumber here
    console.log("holi start");
    this._generateRandomNumber();
    document.getElementById("start-page").style = "display: none";
  }

  checkAttempt() {
    this.userAttempts++;
    let rightGuesses = 0;
    const guesses = document
      .getElementsByClassName("guess-input")[0]
      .value.split("");
    const guessArr = guesses.map((str) => {
      return Number(str);
    });
    console.log(guesses);
    console.log(guessArr);
    guessArr.push(parseInt(guesses));
    if (guesses.length !== 4) {
      alert("Introduce a valid number!");
    }
    for (let i = 0; i < guessArr.length; i++) {
      if (
        this.secretNumber.includes(guessArr[i]) &&
        this.secretNumber[i] === guessArr[i]
      ) {
        rightGuesses++;
        console.log(
          `Number ${guessArr[i]} is right and is in the right position 🟢`
        );
      } else if (this.secretNumber.includes(guessArr[i])) {
        console.log(
          `Number ${guessArr[i]} is right but in the wrong position 🟠`
        );
      } else {
        console.log(
          `Number ${guessArr[i]} is not one of the secret numbers 🔴`
        );
      }
    }
    if (rightGuesses === 4) {
      alert("Omg you win 🎉🎉!");
    }

    document.getElementById("attempts-user").innerHTML = this.userAttempts;
    this._checkIfLost();
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
      //
      document.getElementById("main-page").classList.add("hidden");
      document.getElementById("lose-page").classList.toggle("shown");
      alert(`YOU LOSE!. The secret number was ${this.secretNumber.join("")}`);
    }
  }
}
