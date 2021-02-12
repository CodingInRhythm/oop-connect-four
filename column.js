export class Column {
  constructor(tokenTracker = ["", "", "", "", "", ""]) {
    this.tokenTracker = tokenTracker;
  }
  add(playerNumber) {
    for (let i = this.tokenTracker.length - 1; i >= 0; i--) {
      if (this.tokenTracker[i] === "") {
        this.tokenTracker[i] = playerNumber;
        return;
      }
    }
  }
  getTokenAt(rowIndex) {
    return this.tokenTracker[rowIndex];
  }
  isFull() {
    if (!this.tokenTracker.includes("")) {
      return true;
    }
    return false;
  }
}
