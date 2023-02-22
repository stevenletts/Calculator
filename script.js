let firstNumber = '';
let secondNumber = '';
let operation = '';

const displayVal = document.getElementById("screen-current");
const pastVal = document.getElementById("screen-past");
const operatorBtns = document.querySelectorAll('[data-op]');
const numberBtns = document.querySelectorAll('[data-num]');
const equalsBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');

numberBtns.forEach((btn) => btn.addEventListener('click', () => addNumber(btn.textContent)));
operatorBtns.forEach((btn) => btn.addEventListener('click', () => operationSet(btn.textContent)));
equalsBtn.addEventListener('click', () => calc());
clearBtn.addEventListener('click', () => clear());
decimalBtn.addEventListener('click', () => decimalCheck());

function addNumber(btnNum){
    displayVal.textContent += btnNum;
};

function decimalCheck(){
    if (displayVal.textContent.search(/\./) === 1){
        return;
    } else if (displayVal.textContent === '') {
        addNumber("0.");
    } else {addNumber(".")};
};

function calc(){
    if (displayVal.textContent === ''){
        return;
    } else if (!operation && !secondNumber){
        return;
    }
    secondNumber = displayVal.textContent;
    let solution = roundResult(operate(operation, firstNumber, secondNumber));
    pastVal.textContent = solution;
    displayVal.textContent = '';
    firstNumber = solution;
    operation = '';
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000
};
  

function clear(){
    firstNumber = '';
    secondNumber = '';
    operation = '';
    displayVal.textContent = '';
    pastVal.textContent = '';
};

function operationSet(op){
    if (operation && displayVal.textContent !== ''){
        calc();
    };
    if (firstNumber !== ''){
        operation = op;
        pastVal.textContent = firstNumber + ' ' + op;
        displayVal.textContent = '';
        return;
    };
    firstNumber = displayVal.textContent;
    operation = op;
    pastVal.textContent = firstNumber + ' ' + op;
    displayVal.textContent = '';
}

function add(x, y){
    const result = Number(x) + Number(y);
    return result;
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
        if(y === '0'){ 
            alert("No");
            clear();
            return
        }
        return divide(x, y);
    default:
        console.log("invalid operator");
    };
};












