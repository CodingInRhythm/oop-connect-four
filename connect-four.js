import { Game } from "./game.js";
//console.log(Game);
let game;
const clickTarget = document.getElementById("click-targets");

const updateUI = () => {
  const boardHolder = document.getElementById("board-holder");
  if (game === undefined) {
    boardHolder.setAttribute("class", "is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    document.getElementById("game-name").innerHTML = `${game.getName()}`;
  }
  if (game.currentPlayer === 1) {
    clickTarget.classList.add("black");
    clickTarget.classList.remove("red");
  } else {
    clickTarget.classList.add("red");
    clickTarget.classList.remove("black");
  }

  for (let i = 0; i < 7; i++) {
    let col = document.getElementById(`column-${i}`);
    if (game.isColumnFull(i)) {
      col.classList.add("full");
    } 
  }

  for (let i = 0; i < 6; i++) {
    //row loop
    for (let j = 0; j < 7; j++) {
      //col index
      const square = document.getElementById(`square-${i}-${j}`);
      square.innerHTML = "";
      if (game.getTokenAt(i, j) === 1) {
        let div = document.createElement("div");
        div.classList.add("token", "black");
        square.appendChild(div);
      } else if (game.getTokenAt(i, j) === 2) {
        let div = document.createElement("div");
        div.classList.add("token", "red");
        square.appendChild(div);
      } else {
      }
    }
  }
};
window.addEventListener("DOMContentLoaded", (event) => {
  const player1Input = document.getElementById("player-1-name");
  const player2Input = document.getElementById("player-2-name");
  const formHolder = document.getElementById("form-holder");
  const newGameButton = document.getElementById("new-game");
  const disableButton = () => {
    newGameButton.disabled = true;
  };

  formHolder.addEventListener("keyup", (event) => {
    if (player1Input.value !== "" && player2Input.value !== "") {
      newGameButton.disabled = false;
    } else {
      disableButton();
    }
  });

  newGameButton.addEventListener("click", (event) => {
    event.preventDefault();
    game = new Game(player1Input.value, player2Input.value);
    //console.log(Game);
    player1Input.value = "";
    player2Input.value = "";
    disableButton();
    updateUI();
  });

  //row above board where you click
  clickTarget.addEventListener("click", (event) => {
    let id = event.target.id;
    let split = id.split("-");
    let index = split[1];
    game.playInColumn(index); //switches players
    updateUI(); // refreshes board
  });
});
