import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
export class Game {
  constructor(playerOneName, playerTwoName, columns = []) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.currentPlayer = 1;
    for (let i = 0; i < 7; i++) {
      columns.push(new Column());
    }
    this.columns = columns;
    this.winnerNumber = 0;
  }
  getName() {
    if (this.winnerNumber === 3) {
      return `${this.playerOneName} ties with ${this.playerTwoName}!`;
    } else if (this.winnerNumber === 1) {
      return `${this.playerOneName} wins!`;
    } else if (this.winnerNumber === 2) {
      return `${this.playerTwoName} wins`;
    } else {
      return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }
  }
  playInColumn(index) {
    this.columns[index].add(this.currentPlayer)
    console.log(this.columns[index])
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }

    // console.log(this.columns)
    this.checkForTie();
    this.checkForColumnWin();
  }

  isColumnFull(colIndex) {
    if (this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true;
    }
    return this.columns[colIndex].isFull(this.columns[colIndex]);
  }
  checkForTie() {
    let truthArr = [];
    for (let i = 0; i < 7; i++) {
      truthArr.push(this.isColumnFull(i));
    }
    if (!truthArr.includes(false)) {
      this.winnerNumber = 3;
      //console.log(this.winnerNumber);
    }
  }
  checkForColumnWin() {
    if (this.winnerNumber !== 0) {
      return;
    } else {
      for (let i = 0; i < this.columns.length; i++) {
        const a = new ColumnWinInspector(this.columns[i]);
        // console.log(a)
        if (a.inspect() === 1 || a.inspect() === 2) {
          this.winnerNumber = a.inspect();
          return;
        }
      }
    }
  }
}
