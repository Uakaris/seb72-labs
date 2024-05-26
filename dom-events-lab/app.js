/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let calculation = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

//   calculator.addEventListener('click', (event) => {
   
    // console.log(event.target.innerText);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.textContent;

/*-------------------------------- Functions --------------------------------*/
if (!isNaN(parseInt(value)) || value === '.') {
    currentInput += value;
  } else if (value === 'C') {
    
    currentInput = '';
    calculation = '';
  } else if (value === '=') {
    
    calculation = eval(calculation + currentInput);
    currentInput = '';
  } else {
   
    calculation += currentInput + value;
    currentInput = '';
  }

  
  display.textContent = currentInput || calculation;
});
});