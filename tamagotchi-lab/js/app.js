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

const playButtonElement = document.getElementById('play');
const feedButtonElement = document.getElementById('feed');
const sleepButtonElement = document.getElementById('sleep');
    // console.log(playbuttonElement, feedButtonElement, sleepinessStatElement);

const gameMessageElement = document.getElementById('message');

const resetButtonElement = document.getElementById('restart');
// console.log(resetMessageElement);
/*-------------------------------- Functions --------------------------------*/

function init() {
    gameMessageElement.classList.add('hidden')
    resetButtonElement.classList.add('hidden')
    gameOver = false
    timer = setInterval(runGame, 2000)
    render()
}

function runGame() {
    // console.log('rungame')
    updateStates()
    checkGameOver()
    render()
}

function render() {
    if(gameOver) {
        clearInterval(timer)
        gameMessageElement.classList.remove('hidden')
        resetButtonElement.classList.remove('hidden')
    }
    boredomStatElement.textContent = state.boredom
    hungerStatElement.textContent = state.hunger
    sleepinessStatElement.textContent = state.sleepiness
}

function updateStates() {
    Object.keys(state).forEach(key => {
        state[key] += Math.floor(Math.random() * 3)
    })
    console.log(state);
}

function checkGameOver() {
    if(state.boredom >= 10) {
        gameOver = true
    }
    if(state.hunger >= 10) {
        gameOver = true
    }
    if(state.sleepiness >= 10) {
        gameOver = true
    }
}

function playBtnClick() {
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    render()
}
/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('DOMContentLoaded', init);

playButtonElement.addEventListener('click', playBtnClick);

resetButtonElement.addEventListener('click', init);

// Game working but not as I thought it would. 
// Need to go back over intructions.