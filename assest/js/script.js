var currentPlayer = "X";
var gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(row, col) {
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
    document.getElementsByClassName("cell")[row * 3 + col].innerHTML = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " kazandı!");
      resetBoard();
    } else if (checkDraw()) {
      alert("Berabere!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  // Sütunları yoxla
  for (var i = 0; i < 3; i++) {
    if (gameBoard[0][i] === currentPlayer &&
        gameBoard[1][i] === currentPlayer &&
        gameBoard[2][i] === currentPlayer) {
      return true;
    }
  }

  // Sətirləri yoxla
  for (var i = 0; i < 3; i++) {
    if (gameBoard[i][0] === currentPlayer &&
        gameBoard[i][1] === currentPlayer &&
        gameBoard[i][2] === currentPlayer) {
      return true;
    }
  }

  // Çarpazları yoxla
  if ((gameBoard[0][0] === currentPlayer &&
       gameBoard[1][1] === currentPlayer &&
       gameBoard[2][2] === currentPlayer) ||
      (gameBoard[0][2] === currentPlayer &&
       gameBoard[1][1] === currentPlayer &&
       gameBoard[2][0] === currentPlayer)) {
    return true;
  }

  return false;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}
