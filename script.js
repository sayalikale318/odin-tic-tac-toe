// Gameboard Module
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const updateCell = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, updateCell, resetBoard };
})();


// Player Factory
const Player = (name, marker) => {
    return { name, marker };
};


// Game Controller
const GameController = (() => {
    let player1, player2;
    let currentPlayer;
    let gameOver = false;

    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    const startGame = (name1, name2) => {
        player1 = Player(name1 || "Player 1", "X");
        player2 = Player(name2 || "Player 2", "O");
        currentPlayer = player1;
        gameOver = false;
        DisplayController.setStatus(`${currentPlayer.name}'s Turn`);
    };

    const playRound = (index) => {
        if (gameOver) return;

        if (Gameboard.updateCell(index, currentPlayer.marker)) {
            DisplayController.render();
            checkWinner();
            switchPlayer();
        }
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        if (!gameOver)
            DisplayController.setStatus(`${currentPlayer.name}'s Turn`);
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]) {
                DisplayController.setStatus(`${currentPlayer.name} Wins! 🎉`);
                gameOver = true;
                return;
            }
        }

        if (!board.includes("")) {
            DisplayController.setStatus("It's a Draw!");
            gameOver = true;
        }
    };

    const restartGame = () => {
        Gameboard.resetBoard();
        gameOver = false;
        currentPlayer = player1;
        DisplayController.render();
        DisplayController.setStatus(`${currentPlayer.name}'s Turn`);
    };

    return { startGame, playRound, restartGame };
})();


// Display Controller
const DisplayController = (() => {
    const boardDiv = document.getElementById("gameBoard");
    const statusDiv = document.getElementById("status");

    const render = () => {
        boardDiv.innerHTML = "";
        Gameboard.getBoard().forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.textContent = cell;
            cellDiv.addEventListener("click", () => {
                GameController.playRound(index);
            });
            boardDiv.appendChild(cellDiv);
        });
    };

    const setStatus = (message) => {
        statusDiv.textContent = message;
    };

    render();

    return { render, setStatus };
})();


// Event Listeners
document.getElementById("startBtn").addEventListener("click", () => {
    const name1 = document.getElementById("player1").value;
    const name2 = document.getElementById("player2").value;
    GameController.startGame(name1, name2);
});

document.getElementById("restartBtn").addEventListener("click", () => {
    GameController.restartGame();
});