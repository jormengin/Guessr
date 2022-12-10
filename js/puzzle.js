class PuzzleGame extends Game {
  constructor() {
    super();
    this.rows = 3;
    this.columns = 3;
    //current clicked image, other the one we swap with
    this.currTile;
    this.otherTile;
    this.currTileSrc = [];
    this.otherTileSrc = [];
    this.turns = 0;
    this.imageOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.randomOrder = [];
  }
  populateBoard() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        let tile = document.createElement("img");
        tile.id = r.toString() + "-" + c.toString();
        tile.src = "./images/" + this.randomOrder.shift() + ".png";
        // drag functions
        tile.addEventListener("dragstart", this.dragStart);
        tile.addEventListener("dragover", this.dragOver);
        tile.addEventListener("dragenter", this.dragEnter);
        tile.addEventListener("dragleave", this.dragLeave);
        tile.addEventListener("drop", this.dragDrop);
        tile.addEventListener("dragend", this.dragEnd);

        document.getElementById("board").append(tile);
      }
    }
  }
  _randomizeOrder() {
    if (!this.imageOrder) return undefined;
    this.randomOrder = this.imageOrder.sort(function () {
      return Math.random() - 0.5;
    });
    return this.randomOrder;
  }
  puzzleStart() {
    this._randomizeOrder();
    this.populateBoard();
  }
  dragStart() {
    this.currTile = this; //image being dragged
    console.log(this); //logs img.id and img.src "/images/4.png"
    console.log(this.src); // logs file path users/xxxx/desktop/etc/4.png
  }
  dragOver(e) {
    e.preventDefault();
  }
  dragEnter(e) {
    e.preventDefault();
  }
  dragLeave() {}
  dragDrop() {
    this.otherTile = this; //image tile being dropped
    this.otherTileSrc = this.otherTile.src;
    console.log(this.otherTileSrc, 'this othertitlesrc dragdrop')
    console.log("Other tile drop", this.otherTile);
  }
  dragEnd() {
    let currImg = this.currTile.src;
    // console.log(this.currTile); //logs currTile
    // console.log(currImg); //logs file path
    this.otherTile.src = currImg;
    this.currTile.src = this.otherTileSrc;
  }
}
