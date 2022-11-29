class Game {
  constructor(maxAttempts = 10) {
    this.secretNumber = []
    this.maxAttempts = maxAttempts;
    this.userAttempts = 0;
    this.UserScore = 0;
  }

  start() {
    document.getElementById('start-page').style = 'display: none';
    document.getElementById('main-page').classList.toggle('shown');
  }
  

  checkAttempt() {
    this.userAttempts++;
    let rightGuesses = 0;
    const guesses = (document.getElementsByClassName('guess-input')[0].value).split('');
    const guessArr = guesses.map((str) => {
      return Number(str);
    });
    console.log(guesses)
    console.log(guessArr);
    guessArr.push(parseInt(guesses));
     if (guesses.length !== 4 ) {
       alert("Introduce a valid number!");
     }
    for (let i = 0; i < guessArr.length; i++) { 
      if (this.secretNumber.includes(guessArr[i]) && this.secretNumber[i] === guessArr[i]) { 
        rightGuesses++;
        console.log(`Number ${guessArr[i]} is right and is in the right position 🟢`); 
      } else if (this.secretNumber.includes(guessArr[i])) { 
        console.log(`Number ${guessArr[i]} is right but in the wrong position 🟠`); 
        console.log(`Number ${guessArr[i]} is not one of the secret numbers 🔴`); 
      }
      if (rightGuesses === 4) {
        alert('Omg you win 🎉🎉!')
      }
    }
    document.getElementById("attempts-user").innerHTML = this.userAttempts;
    this._checkIfLost();
  }

  _generateRandomNumber() {
    let arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * arrNumbers.length);
      this.secretNumber.push(arrNumbers[randomIndex]);
      arrNumbers.splice(randomIndex, 1);
      console.log(this.secretNumber)
      console.log(arrNumbers);
    }
  }

  _checkIfLost() {
    if (this.userAttempts === 10) {
      alert(`YOU LOSE!. The secret number was ${this.secretNumber.join('')}`)
      document.getElementById("lose-page").classList.toggle("shown");
    }
  }
}
let newgame = new Game();
newgame._generateRandomNumber();