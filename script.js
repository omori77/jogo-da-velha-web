let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(cell, index) {
    if (board[index] === "" && !checkWinner()) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => alert(`${currentPlayer} venceu!`), 100);
        } else if (board.every((cell) => cell !== "")) {
            setTimeout(() => alert("Empate!"), 100);
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    return winConditions.some((condition) => {
        const [a, b, c] = condition;
        return (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        );
    });
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
}
