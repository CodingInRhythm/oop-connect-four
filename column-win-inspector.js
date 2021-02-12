export class ColumnWinInspector {
  constructor(ColObj) {
    this.ColObj = ColObj;
  }
  inspect() {
    let colStr = this.ColObj.tokenTracker.join("");
    // console.log(colStr)
    // console.log("11112".includes("1111"))
    if (colStr.includes("1111")) {
      return 1;
    } else if (colStr.includes("2222")) {
      return 2;
    }
    return 0;
  }
}
