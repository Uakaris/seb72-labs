/*-------------------------------- Constants --------------------------------*/

// const choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const winningCombos = [
    [0, 1, 2], // Horizontal winning combos
    [3, 4, 5], // Horizontal winning combos
    [6, 7, 8], // Horizontal winning combos
    [0, 3, 6], // Vertical winning combos
    [1, 4, 7], // Vertical winning combos
    [2, 5, 8], // Vertical winning combos
    [0, 4, 8], //diagonal winning combos
    [2, 4, 6], //diagonal winning combos
];

/*---------------------------- Variables (state) ----------------------------*/

// let playerChoice;
// let computerChoice;
// let message;

let board;
let turn;
let winner;
let tie;

board = ["", "", "", "", "", "", "", "", ""];
turn = "X";
winner = false;
tie = false;
/*------------------------ Cached Element References ------------------------*/

const squareElement = document.querySelectorAll('.sqr');
const resultDisplayElement = document.querySelector('#message');
/*-------------------------------- Functions --------------------------------*/

// const sample = (array) => {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// };

function init () {
    console.log('Game started');
    //board = ["", "X", "", "O", "", "", "", "", ""];
}

function render () {
    console.log('Render function');
    updateBoard();
    updateMessage();
}

function handleClick(event) {
    const squareIndex = event.target.dataset.index;
    if (board === 'X' || 'O') {
        return;
    }   if (winner === true) 
     return;
}

function placePiece (index) {
    
}

function updateBoard() {
board.forEach((element, index) => {
console.log(index);
const squareElement = document.getElementById(index);
squareElement.textContent = element;
});
}

function updateMessage(){
    if (winner === false && tie === false) {
        console.log(`Player turn: ${turn}`);
    }   else if (winner === false && tie === true) {
    }   else {
        console.log(`The winner is ${turn}`);
    }
}
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    //init(board = ["", "X", "", "O", "X", "", "", "X", ""]);
    //render();
    // updateBoard();
    // updateMessage();
})

squareElement.forEach(square => square.addEventListener('click', handleClick));


