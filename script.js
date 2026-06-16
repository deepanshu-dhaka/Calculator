// let num1 = +prompt("Enter first number:");
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = +prompt("Enter second number: ");



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        console.log(add(num1, num2));
    }
    else if (operator === '-') {
        subtract(num1, num2);
    }
    else if (operator === '*') {
        multiply(num1, num2);
    }
    else if (operator === '/') {
        divide(num1, num2);
    }
}

operate(num1, operator, num2)