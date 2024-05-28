/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/

const boredomStatElement = document.getElementById('boredom-stat');
const hungerStatElement = document.getElementById('hunger-stat');
const sleepinessStatElement = document.getElementById('sleepiness-stat');
    // console.log(boredomStatElement, hungerStatElement, sleepinessStatElement);

const playbuttonElement = document.getElementById('play');
const feedButtonElement = document.getElementById('feed');
const sleepButtonElement = document.getElementById('sleep');
    // console.log(playbuttonElement, feedButtonElement, sleepinessStatElement);

const gameMessageElement = document.getElementById('message');

const resetMessageElement = document.getElementById('restart');
// console.log(resetMessageElement);
/*-------------------------------- Functions --------------------------------*/

function init() {
    gameOver = false
    timer = setInterval(runGame(), 2000)
    render()
}

function runGame() {
    // console.log('rungame')
    updateStates()
    render()
}

function render() {
    boredomStatElement.textContent = state.boredom
    hungerStatElement.textContent = state.hunger
    sleepinessStatElement.textContent = state.sleepiness
}

function updateStates() {
    Object.keys(state).forEach(key => {
        state[key] = Math.floor(Math.random() * 3)
    })
    console.log(state);
}
updateStates();

// function updateStates() {
//     state.forEach((element, index) => {
//         for (const iterator of object) {
//             state.forEach(element => {
                
//             });
//         }
//     });
// }
/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('DOMContentLoaded', init);

