export class ColumnWinInspector {
  constructor(ColObj) {
    this.ColObj = ColObj;
  }
  inspect() {
    let colStr = this.ColObj.tokenTacker.join(",");

    if (colStr.includes("1111")) {
      return 1;
    } else if (colStr.includes("2222")) {
      return 2;
    }
    return 0;
  }
}
