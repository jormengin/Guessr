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
    console.log(this.secretWord)
    this.userWordToPrint = [];
    this.numberCorrectGuesses = 0;
    this.userWord = document
      .getElementsByClassName("word-input")[0]
      .value.toUpperCase();
    if (
      this.userWord.length !== 5 //||
      // typeof this.userWord !== "string" ||
      // !wordsArray.includes(this.userWord.toLocaleLowerCase()&&!arrNoDiacritic.includes(this.userWord.toLocaleLowerCase()))
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
    let row =
      document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
    for (let i = 0; i < this.userWordToPrint.length; i++) {
      console.log(this.userWordToPrint[i].letter);
      let delay = 200 ^ i/10;
      setTimeout(() => {
        let box = row.children[i];
        box.innerHTML = this.userWordToPrint[i].letter;
        box.classList.add(this.userWordToPrint[i].color);
        let buttonToChange = document.getElementById(this.userWordToPrint[i].letter.value);
        buttonToChange.classList.add(this.userWordToPrint[i].color);
      }, delay);
    }
  }
  _printKeyboard() {
  
}
  _pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    this.secretWord = wordsArray[randomIndex].toUpperCase();
    this.secretWordArr = this.secretWord.split("");
    console.log(this.secretWord);
  }
  _pickRandomWordSpanish() {
    const randomIndex = Math.floor(Math.random() * arrNoDiacritic.length);
    this.secretWord = arrNoDiacritic[randomIndex].toUpperCase();
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
      }, 1200);
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
  wordStartSpanish() {
    this._pickRandomWordSpanish();
    document.getElementById("start-page").style = "display: none";
    this._timer();
  }
}
