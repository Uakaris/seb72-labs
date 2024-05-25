/*-------------------------------- Constants --------------------------------*/

// const choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
}

function render () {
    console.log('Render function');
}

function updateBoard() {
board.forEach((element, index) => {
console.log(index);
const squareElement = document.getElementById(index);
squareElement.textContent = turn;
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
    init();
    // updateBoard();
})



