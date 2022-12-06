class PuzzleGame extends Game {
  constructor() {
    super();
    this.rows = 3;
    this.columns = 3;
    //current clicked image, other the one we swap with
    this.currentTile;
    this.otherTile;
    this.turns = 0;
    this.imageOrder = ["1","2","3","4","5","6","7","8","9"]
  }
  populateBoard() {
   let i = 1;
    for (let r = 0; r < this.rows; r++){
      for (let c = 0; c < this.columns; c++){
        let tile = document.createElement("img");
        tile.id = r.toString() + "-" + c.toString();
        tile.src = "./images/"+i+".png"
        document.getElementById("board").append(tile);
        i++;
      }
    }
  }
  puzzleStart() { 
    this.populateBoard();
  }
}