// Get the HTML Elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divButton = document.querySelector('#divide-button');
let mulButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// Click on Minus Button
minusButton.addEventListener('click',function() {
   operatorButton.textContent = minusButton.textContent;
});

// Click on Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent = plusButton.textContent;
});

// Click on Divide Button
divButton.addEventListener('click',function() {
    operatorButton.textContent = divButton.textContent;
});

// Click on Mul Button
mulButton.addEventListener('click',function() {
    operatorButton.textContent = mulButton.textContent;
});

// Click o Equals Button
equalsButton.addEventListener('click',function() {
    let firstNumber = firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.textContent;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result.toString();
    }
});

// Clear Button
clearButton.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});