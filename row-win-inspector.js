export class RowWinInspector {
  constructor(columns) {
    this.columns = columns; //array of columns objects
  }
  inspect() {
    //console.log(this.columns);
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      //what row
      const token0 = this.columns[0].getTokenAt(rowIndex);
      const token1 = this.columns[1].getTokenAt(rowIndex);
      const token2 = this.columns[2].getTokenAt(rowIndex);
      const token3 = this.columns[3].getTokenAt(rowIndex);
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
