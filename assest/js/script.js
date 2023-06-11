"use strict";
var currentPlayer = "X";
var gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
var player1Name = "";
var player2Name = "";
var player1Score = 0;
var player2Score = 0;

function updatePlayerNames() {
    player1Name = document.getElementById("player1Name").value || "Player 1";
    player2Name = document.getElementById("player2Name").value || "Player 2";
    document.getElementById("player1Name").disabled = true;
    document.getElementById("player2Name").disabled = true;
}

function makeMove(row, col) {
    if (gameBoard[row][col] === "") {
        gameBoard[row][col] = currentPlayer;
        document.getElementsByClassName("cell")[row * 3 + col].innerHTML = currentPlayer;

        if (checkWin()) {
            if (currentPlayer === "X") {
                player1Score++;
                document.getElementById("gameMessage").innerText = player1Name + " wins!";
            } else {
                player2Score++;
                document.getElementById("gameMessage").innerText = player2Name + " wins!";
            }
            updateScores();
            resetBoard();
        } else if (checkDraw()) {
            document.getElementById("gameMessage").innerText = "Draw!";
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function updateScores() {
    document.getElementById("player1Score").innerText = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerText = player2Name + ": " + player2Score;
}

function checkWin() {
    // Check columns
    for (var i = 0; i < 3; i++) {
        if (
            gameBoard[0][i] === currentPlayer &&
            gameBoard[1][i] === currentPlayer &&
            gameBoard[2][i] === currentPlayer
        ) {
            return true;
        }
    }

    // Check rows
    for (var i = 0; i < 3; i++) {
        if (
            gameBoard[i][0] === currentPlayer &&
            gameBoard[i][1] === currentPlayer &&
            gameBoard[i][2] === currentPlayer
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        (gameBoard[0][0] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][2] === currentPlayer) ||
        (gameBoard[0][2] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][0] === currentPlayer)
    ) {
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
