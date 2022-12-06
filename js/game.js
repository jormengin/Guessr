class Game {
  constructor() {
    this.userAttempts = 0;
    this.currentTime = 0;
    this.intervalID = null;
    this.score = 0;
    this.mute = false;
  }
  
  _timer() {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  _getScore() {
    this.score = this.currentTime * this.userAttempts * 2;
  }
  mutePage() {
    console.log('im mute page function')
    console.log(this.mute)
    if ((this.mute === false)) {
      this.mute = true;
    } else if ((this.mute === true)) {
      this.mute = false;
    }
  }
}