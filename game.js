import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
import { RowWinInspector } from "./row-win-inspector.js";
import {DiagonalWinInspector} from "./diagonal-win-inspector.js"

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
  getTokenAt(rowIndex, colIndex) {
    return this.columns[colIndex].tokenTracker[rowIndex];
  }
  playInColumn(index) {
    console.log(this.winnerNumber);
   
    this.columns[index].add(this.currentPlayer);
    //console.log(this.columns[index]);
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }

    // console.log(this.columns)
    this.checkForTie();
    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkDiagonalWin();
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
          this.winnerNumber = a.inspect()//what determins we have a win...changes winner Number
          for (let i = 0; i < 7; i++) {
            let col = document.getElementById(`column-${i}`);
            col.classList.add("full");
          }
       
           
          return;
        }
      }
    }
  }
  checkForRowWin() {
    if (this.winnerNumber !== 0) {
      return;
    }
    console.log(this.columns.slice(0, 4));
    const grp1 = new RowWinInspector(this.columns.slice(0, 4));
    if (grp1.inspect() > 0) {
      console.log("shouldve won");
      this.winnerNumber = grp1.inspect();
      return;
    }
    const grp2 = new RowWinInspector(this.columns.slice(1, 5));
    if (grp2.inspect() > 0) {
      this.winnerNumber = grp2.inspect();
      return;
    }
    const grp3 = new RowWinInspector(this.columns.slice(2, 6));
    if (grp3.inspect() > 0) {
      this.winnerNumber = grp3.inspect();
      return;
    }
    const grp4 = new RowWinInspector(this.columns.slice(3, 7));
    if (grp4.inspect() > 0) {
      this.winnerNumber = grp4.inspect();
      return;
    }
  }
  checkDiagonalWin() {
        if (this.winnerNumber !== 0) {
          return;
        }
      
        const grp1 = new DiagonalWinInspector(this.columns.slice(0, 4));
        if (grp1.inspect() > 0) {
          console.log("shouldve won");
          this.winnerNumber = grp1.inspect();
          return;
        }
        const grp2 = new DiagonalWinInspector(this.columns.slice(1, 5));
        if (grp2.inspect() > 0) {
          this.winnerNumber = grp2.inspect();
          return;
        }
        const grp3 = new DiagonalWinInspector(this.columns.slice(2, 6));
        if (grp3.inspect() > 0) {
          this.winnerNumber = grp3.inspect();
          return;
        }
        const grp4 = new DiagonalWinInspector(this.columns.slice(3, 7));
        if (grp4.inspect() > 0) {
          this.winnerNumber = grp4.inspect();
          return;
        }
  }
}
