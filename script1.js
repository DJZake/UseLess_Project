const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const messageDisplay = document.getElementById('message');

let currentPlayer = 'X';
let gameState = Array(9).fill(null);
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function createBoard() {
    gameState.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    });
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = clickedCell.dataset.index;

    if (gameState[clickedCellIndex] || !isGameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    if (checkWin()) {
        messageDisplay.textContent = `Player ${currentPlayer} Wins! 🎉`;
        isGameActive = false;
        return;
    }

    if (gameState.every(cell => cell)) {
        messageDisplay.textContent = 'It\'s a Tie! 🤝';
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    gameState.fill(null);
    isGameActive = true;
    currentPlayer = 'X';
    messageDisplay.textContent = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}

createBoard();
