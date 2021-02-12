import { Column } from "./column.js";
export class Game {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.currentPlayer = 1;
    let columns = [];
    for (let i = 0; i < 7; i++) {
      columns.push(new Column());
    }
    this.columns = columns;
  }
  getName() {
    return `${this.playerOneName} vs. ${this.playerTwoName}`;
  }
  playInColumn() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  isColumnFull(colIndex) {
    return this.columns[colIndex].isFull(this.columns[colIndex]);
  }
}
