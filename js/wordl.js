class Wordle extends Game {
  constructor() {
    super();
    this.userWord = "userword";
    this.userWordArr = [];
    this.secretWord = "secretword";
    this.secretWordArr = [];
    this.numberOfGuesses = 6;
    this.guessesLeft = this.numberOfGuesses;
    this.letterPosition = 0;
    this.numberCorrectGuesses = 0;
    this.userWordToPrint = [];
  }
  checkWord() {
    this.userWordToPrint = [];
    this.numberCorrectGuesses = 0;
    this.userWord = document
      .getElementsByClassName("word-input")[0]
      .value.toUpperCase();
    if (
      this.userWord.length !== 5 ||
      typeof this.userWord !== "string" ||
      !wordsArray.includes(this.userWord.toLocaleLowerCase())
    ) {
      alert("Introduce a valid Word!");
      return;
    }
    this.userWordArr = this.userWord.split("");
    for (let i = 0; i < this.userWordArr.length; i++) {
      let letterObject = {};
      let letterCheck = this.secretWordArr.indexOf(this.userWordArr[i]);
      if (letterCheck === -1) {
        letterObject.letter = this.userWordArr[i];
        letterObject.color = "incorrect-letter-box";
        this.userWordToPrint.push(letterObject);
      } else {
        if (this.secretWordArr[i] === this.userWordArr[i]) {
          letterObject.letter = this.userWordArr[i];
          letterObject.color = "correct-letter-box";
          this.userWordToPrint.push(letterObject);
          this.numberCorrectGuesses++;
        } else {
          letterObject.letter = this.userWordArr[i];
          letterObject.color = "almost-letter-box";
          this.userWordToPrint.push(letterObject);
        }
      }
 this._asyncPrinter();
      this._checkIfWinWords();
    }
   
    this.numberOfGuesses--;
    this._checkIfLostWords();
  }

  _asyncPrinter() {
    console.log(`this is the number of guesses ${this.numberOfGuesses} at async printer`);
     let row =
       document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
    for (let i = 0; i < this.userWordToPrint.length; i++) {
      let delay = 200 * i;
      setTimeout(() => {
        let box = row.children[i];   
        box.innerHTML = this.userWordToPrint[i].letter;
        box.classList.add(this.userWordToPrint[i].color);
        console.log(box.classList);
      }, delay);
    }
  }

  _pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    this.secretWord = wordsArray[randomIndex].toUpperCase();
    this.secretWordArr = this.secretWord.split("");
    console.log(this.secretWord);
  }
  _checkIfWinWords() {
    if (this.numberCorrectGuesses === 5) {
      setTimeout(() => {
        document.getElementById("wordl-page").style = "display: none";
        document.getElementById("win-page").style = "display:flex";
        this.wordStart();
        return;
      },2200)
    }
  }
  _checkIfLostWords() {
    if (this.numberOfGuesses === 0 && this.numberCorrectGuesses !== 5) {
      document.getElementById("wordl-page").style = "display: none";
      document.getElementById("lose-page").style = "display:flex";
      this.wordStart();
    }
  }
  wordStart() {
    this._pickRandomWord();
    document.getElementById("start-page").style = "display: none";
    this._timer();
  }
}

//  checkWord() {
//     this.numberCorrectGuesses = 0;
//     this.userWord = document.getElementsByClassName("word-input")[0].value.toUpperCase();
//     if (this.userWord.length !== 5 || typeof this.userWord !== "string" ||!wordsArray.includes(this.userWord.toLocaleLowerCase())) {
//       alert("Introduce a valid Word!");
//       return
//     }
//     this.userWordArr = this.userWord.split("");
//     let row =
//       document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
//     this._insertWord();
//     this.numberOfGuesses--;
//     for (let i = 0; i < this.userWordArr.length; i++) {
//       let box = row.children[i];
//       let letterCheck = this.secretWordArr.indexOf(this.userWordArr[i]);
//       if (letterCheck === -1) {
//         box.classList.add("incorrect-letter-box");
//       } else {
//         if (this.secretWordArr[i] === this.userWordArr[i]) {
//           box.classList.add("correct-letter-box");
//           this.numberCorrectGuesses++;
//         } else {
//           box.classList.add("almost-letter-box");
//         }
//       }
//       console.log(this.numberCorrectGuesses);
//       this._checkIfWinWords();
//       this._checkIfLostWords();
//     }
//   }
//  _insertWord() {
//     this.letterPosition = 0;
//     let row =
//       document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
//       this.userWordArr.map(x => {
//         console.log('for loop insert word funca');
//         let box = row.children[this.letterPosition];
//         box.innerHTML = x;
//         box.classList.add("filled-box");
//         this.letterPosition++;
//       })
//   }

//  _insertWord() {
//     this.letterPosition = 0;
//     let row =
//       document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
//       this.userWordArr.map(x => {
//         let box = row.children[this.letterPosition];
//         box.innerHTML = x;
//         box.classList.add("filled-box");
//         this.letterPosition++;
//       })
//   }
