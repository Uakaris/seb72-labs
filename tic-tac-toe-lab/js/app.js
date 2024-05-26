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


/*------------------------ Cached Element References ------------------------*/

const squareElement = document.querySelectorAll('.sqr');
const resultDisplayElement = document.querySelector('#message');
const boardElement = document.querySelector('.board');
const resetButtonElement = document.querySelector('#reset');
/*-------------------------------- Functions --------------------------------*/

// const sample = (array) => {
//     const randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// };

function init () {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    render();
    // console.log('Game started');
    // console.log(winningCombos[0]);
    //board = ["", "X", "", "O", "", "", "", "", ""];
}

function render () {
    // console.log('Render function');
    updateBoard();
    updateMessage();
}

function handleClick(event) {
    if (!winner) {
        const squareIndex = event.target.id;
        // console.log(squareIndex);
        const squareValue = board[squareIndex];
        if (squareValue) {
            alert("The selected square is already filled.")
            return;
        } 
        placePiece(squareIndex);
        checkForWinner();
        checkForTie();
        switchPlayerTurn();
        render();
        
    } 
}

function placePiece (index) {
    board[index] = turn;
    console.log([board]);
}

function checkForWinner() {
    winningCombos.forEach((combo) => {
        const [index1, index2, index3] = combo;
        const valueA = board[index1];
        const valueB = board[index2];
        const valueC = board[index3];
        
        // Check if all three values are the same and not empty
        if (valueA !== "" && valueA === valueB && valueB === valueC) {
            // We have a winner
            winner = true;
            console.log(`Player ${valueA} wins!`);
        }
        // Need to work on my understanding of this function
        // combo[0]
        // combo[1]
        // comob[2]
        
    });
}

function checkForTie() {
    if (winner) {
        return;
    }
    if (board.includes('')) {
        tie = false;
    } else {
        tie = true;
    }
    console.log('Tie:', tie);
}

function switchPlayerTurn() {
    if (winner) {
        return;
    }
    turn = (turn === 'X') ? 'O' : 'X';
    //tunery operator - condensed 'if-else' statement.
    // (turn === 'X') condition to be evaluated (checks if value of turn is X).
    // it toggles the value of turn between 'X' and 'O'. 
    // If turn is 'X', it changes it to 'O'.
    // If it's anything else (including 'O'), it changes it to 'X'.
    console.log('Turn', turn);
}

function updateBoard() {
board.forEach((element, index) => {
// console.log(index);
const squareElement = document.getElementById(index);
squareElement.textContent = element;
});
}

// function updateMessage(){
//     if (winner === false && tie === false) {
//         console.log(`Player turn: ${turn}`);
//     }   else if (winner === false && tie === true) {
//     }   else {
//         console.log(`The winner is ${turn}`);
//     }
// }

function updateMessage(){
    if (winner === false && tie === false) {
        resultDisplayElement.textContent = `Player turn: ${turn}`;
    }   else if (winner === false && tie === true) {
        resultDisplayElement.textContent = "It's a tie!";
    }   else {
        resultDisplayElement.textContent = `The winner is ${turn}`;
    }
}

function reset() {
    init();
}
/*----------------------------- Event Listeners -----------------------------*/
// document.addEventListener("DOMContentLoaded", init, function() {
//     //init(board = ["", "X", "", "O", "X", "", "", "X", ""]);
//     //render();
//     // updateBoard();
//     // updateMessage();
//     init();
// })

document.addEventListener('DOMContentLoaded', init);

// squareElement.addEventListener('click',updateMessage);

boardElement.addEventListener('click', handleClick);

resetButtonElement.addEventListener('click', reset);

// resetButtonElement.addEventListener("click", init,);
//script not working. Need to fix reset function as well as updateMessage function.