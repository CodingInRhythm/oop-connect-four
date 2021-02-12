export class DiagonalWinInspector {
    constructor (columns) {
        this.columns = columns;
    }
    inspect() {
        for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      //what row
      const token0 = this.columns[0].getTokenAt(rowIndex); //row index 0, col. 0 === row index 1, col. 1 == row index 2, col. 2...
      const token1 = this.columns[1].getTokenAt(rowIndex - 1);
      const token2 = this.columns[2].getTokenAt(rowIndex - 2);
      const token3 = this.columns[3].getTokenAt(rowIndex - 3);
      if (
        token0 &&
        token0 === token1 &&
        token1 === token2 &&
        token2 === token3
      ) {
        console.log(token0);
        return token0;
      }
    }
       for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      //what row
      const token0 = this.columns[0].getTokenAt(rowIndex); //row index 0, col. 0 === row index 1, col. 1 == row index 2, col. 2...
      const token1 = this.columns[1].getTokenAt(rowIndex + 1);
      const token2 = this.columns[2].getTokenAt(rowIndex + 2);
      const token3 = this.columns[3].getTokenAt(rowIndex + 3);
      if (
        token0 &&
        token0 === token1 &&
        token1 === token2 &&
        token2 === token3
      ) {
        console.log(token0);
        return token0;
      }
    }
    return 0;
  }
}
