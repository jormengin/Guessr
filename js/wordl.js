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
    this.language = '';
  }
  checkWord() {
    this.userAttempts++;
    console.log(this.secretWord)
    this.userWordToPrint = [];
    this.numberCorrectGuesses = 0;
    this.userWord = document
      .getElementsByClassName("word-input")[0]
      .value.toUpperCase();
    if (
      this.userWord.length !== 5 ||
      typeof this.userWord !== "string") {
      alert("Introduce a valid Word!");
      return;
    }
    if (this.language === 'spanish' && !arrNoDiacritic.includes(this.userWord.toLocaleLowerCase())
    ) {
      alert('Introduce una palabra válida');
      return
    } else if (this.language === 'english' && !wordsArray.includes(this.userWord.toLocaleLowerCase())
    ) {
      alert('Introduce a valid Word');
      return
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
    }
    this._getScore();
    document.getElementById("score-wordl").innerHTML = this.score;
    this._asyncPrinter();
    this._printKeyboard();
    this._checkIfWinWords();
    this.numberOfGuesses--;
    this._checkIfLostWords();
  }

  _asyncPrinter() {
    let row =
      document.getElementsByClassName("letter-row")[6 - this.numberOfGuesses];
    for (let i = 0; i < this.userWordToPrint.length; i++) {
      let delay = 250* i;
      setTimeout(() => {
        let box = row.children[i];
        box.innerHTML = this.userWordToPrint[i].letter;
        box.classList.add(this.userWordToPrint[i].color);
        if (!this.mute === true) {
          this._playSound();
        // typeSound.play()
      }
      }, delay);
    }
  }
  _playSound (){
    let random = Math.floor((Math.random() * 4)+1)
    switch (random) {
      case 1:
        typeSound1.play();
        break
      case 2:
        typeSound1.play();
        break
      case 3:
        typeSound3.play();
        break
      case 4:
        typeSound4.play();
        break
      default:
        typeSound1.play();
    }

  }
  _printKeyboard() {
    for (let i = 0; i < this.userWordToPrint.length; i++) {
      let delay = 250 * i;
      setTimeout(() => {
        let buttonToChange = document.getElementById(
          this.userWordToPrint[i].letter
        );
        buttonToChange.classList.add(this.userWordToPrint[i].color);
      }, delay)
      
    }
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
      returnSound.play();
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
      setTimeout(() => {
        document.getElementById("wordl-page").style = "display: none";
        document.getElementById("lose-page").style = "display:flex";
        this.wordStart();
      }, 1200);
    }
  }
  wordStart() {
   muteBtn.onclick = () => {
     this.mutePage();
   };
    this._pickRandomWord();
    document.getElementById("start-page").style = "display: none";
    this._timer();
    this.language='english'
  }
  wordStartSpanish() {
    muteBtn.onclick =()=> {
      this.mutePage();
    }
    this._pickRandomWordSpanish();
    document.getElementById("start-page").style = "display: none";
    this._timer();
    this.language = 'spanish';
    document.getElementById('wordl-title').innerHTML = 'Adivina la palabra';
    document.getElementById("guess-btn-words").innerHTML = "Intento";
    document.getElementById("restart-btn-wordl").innerHTML = "Reinicio";
  }
}
