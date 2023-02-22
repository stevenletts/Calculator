let firstNumber = '';
let secondNumber = '';
let operation = '';

const displayVal = document.getElementById("screen");
const operatorBtns = document.querySelectorAll('[data-op]');
const numberBtns = document.querySelectorAll('[data-num]');

numberBtns.forEach((btn) => btn.addEventListener('click', () => addNumber(btn.textContent)));

function addNumber(btnNum){
    if (displayVal.textContent === ' 0 '){
        displayVal.textContent = '';
    };
    console.log(btnNum)
    displayVal.textContent += btnNum;
};

function add(x, y){
    return (x + y);
};

function subtract(x, y){
    return (x - y);
};

function multiply(x, y){
    return (x * y);
};

function divide(x, y){
    return (x / y);
};

function operate(operator, x, y){
    switch (operator) {
    case "+":
        return add(x, y);
    case "-":
        return subtract(x, y);
    case "x": 
        return multiply(x, y);
    case "/":
        return divide(x, y);
    default:
        console.log("invalid operator");
    };
};












