class Game {
  constructor(levelNumbers) {
    this.userAttempts = 0;
    this.currentTime = 0;
    this.intervalID = null;
    this.score = 0; 
    this.levelNumbers = levelNumbers;
  }

  _timer() {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  _getScore() {
    this.score = this.currentTime * this.userAttempts * 2;
  }
}