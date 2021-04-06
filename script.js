
function substract() {
    const substractResult = firstValue.value - secondValue.value;
    calculatorResult.textContent = 'Substract Result= ' + substractResult;
}

function sum() {
    const sumResult = Number(firstValue.value) + Number(secondValue.value);
    calculatorResult.textContent = 'Sum Result= ' + sumResult;
}

function multiply() {
    const multiplyResult = firstValue.value * secondValue.value;
    calculatorResult.textContent = 'Multiply Result= ' + multiplyResult;  
}

function divide() {
    const divideResult = firstValue.value / secondValue.value;
    calculatorResult.textContent = 'Divide Result= ' +  divideResult;
}

//esta guardando los elementos de los inputs
const firstValue = document.querySelector('.firstValue');
const secondValue = document.querySelector('.secondValue');

const substractButton = document.querySelector('.operationSubstract');
const sumButton = document.querySelector('.operationSum');
const multiplyButton = document.querySelector('.operationMultiply');
const divideButton = document.querySelector('.operationDivide');

const calculatorResult = document.querySelector('.resultOperation');

//addEventLister es para que se ejecute una funcion para un evento dado del elemento
substractButton.addEventListener('click', substract);
sumButton.addEventListener('click', sum);
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide);