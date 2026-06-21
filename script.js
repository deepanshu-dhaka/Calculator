let num1 = '';
let operator;
const operators = ['+', '-', '*', '/'];
let num2 = '';
let result;
let isFirstVaribaleDeclared = false;
let isSecondVariableDeclared = false;
let isEqualtoOperatorClicked = false;

let acBtn = document.querySelector("#ac-button");
acBtn.addEventListener("click", clearTheDisplay
)

function clearTheDisplay(e) {
    num1 = '';
    num2 = '';
    operator = '';
    screenDisplay.textContent = '0';
    isFirstVaribaleDeclared = false;
    isSecondVariableDeclared = false;
    isEqualtoOperatorClicked = false;
}


function add(num1, num2) {
    screenDisplay.textContent = num1 + num2;
    result = num1 + num2;
    isSecondVariableDeclared = false;
    return result
}

function subtract(num1, num2) {
    screenDisplay.textContent = num1 - num2;
    result = num1 - num2;
    isSecondVariableDeclared = false;
    return result
}

function multiply(num1, num2) {
    screenDisplay.textContent = num1 * num2;
    result = num1 * num2;
    isSecondVariableDeclared = false;
    return result
}

function divide(num1, num2) {
    result = num1 / num2;
    if (result == 'Infinity') {
        screenDisplay.textContent = "Can't divide by zero!"
        return;
    }
    screenDisplay.textContent = result.toFixed(5);

    isSecondVariableDeclared = false;
    return result
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        return (add(num1, num2));
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }

}

let screenDisplay = document.querySelector(".screen-container p");
console.log(screenDisplay.textContent)

let digitBtns = document.querySelectorAll(".digit-btn");
console.log(digitBtns);

let equaltoBtn = document.querySelector(".equalto-btn");
equaltoBtn.addEventListener("click", function equaltoBtnHandler(e) {
    if (num1 && operator && num2) {
        num1 = operate(+num1, operator, +num2)
        console.log(num1)
        num1 = '';
        num2 = '';
        operator = '';
        isFirstVaribaleDeclared = false;
        isSecondVariableDeclared = false;
        isEqualtoOperatorClicked = false;
    }

})

let operatorBtns = document.querySelectorAll(".operator-btn");
console.log(operatorBtns)
let isOperatorDeclared = false;
operatorBtns.forEach((item) =>
    item.addEventListener("click", function (e) {
        // if (!isOperatorDeclared) {
        //     operator = e.target.textContent
        //     isOperatorDeclared = true;
        // }
        // else if (operator && num2 && isOperatorDeclared) {
        //     operate(+num1, operator, +num2);
        //     operator = e.target.textContent;
        //     num1 = result;
        // }
        if (isSecondVariableDeclared) {
            num1 = operate(+num1, operator, +num2)
            console.log(num1)
            num2 = " ";
        }

        if (num1) {
            operator = e.target.textContent;
            console.log("operator defined")
            isFirstVaribaleDeclared = true;
        }



    })
)


function clickHandler(e) {
    // num1 = e.target.textContent;
    // screenDisplay.textContent = num1;
    // console.log(num1)
    getValues(e)
}

document.addEventListener("keydown", keyDownTextField, false);
includedDigitKeyArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
includedOperatorKeyArray = ['+', '-', '*', '/']
function keyDownTextField(event) {
    if (includedDigitKeyArray.includes(event.key)) {
        console.log(event.key)
        if (!isFirstVaribaleDeclared) {
            let clickedDigit = event.key;
            num1 = num1 + clickedDigit;
            screenDisplay.textContent = num1;
        }
        else if (isFirstVaribaleDeclared && num1) {
            console.log("yay,we'are here")
            isSecondVariableDeclared = true;
            let clickedDigit = event.key;
            num2 = num2 + clickedDigit;
            screenDisplay.textContent = num2;
        }

    }
    else if (includedOperatorKeyArray.includes(event.key)) {
        console.log(event.key)
        if (isSecondVariableDeclared) {
            num1 = operate(+num1, operator, +num2)
            console.log(num1)
            num2 = " ";
        }

        if (num1) {
            operator = event.key;
            console.log("operator defined")
            isFirstVaribaleDeclared = true;
        }
    }
    else if (event.key === '=' || event.keyCode == 13) {
        console.log(event.key)
        if (num1 && operator && num2) {
            num1 = operate(+num1, operator, +num2)
            console.log(num1)
            num1 = '';
            num2 = '';
            operator = '';
            isFirstVaribaleDeclared = false;
            isSecondVariableDeclared = false;
            isEqualtoOperatorClicked = false;
        }

    }
    else if (event.key === 'Backspace') {
        let len = screenDisplay.textContent.length;
        console.log(len)
        if (len) {
            if (num2) {
                num2 = num2.slice(0, -1);
                screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
            }
            else {
                num1 = num1.slice(0, -1);
                screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
            }

        }
    }
}

function getValues(e) {
    if (!isFirstVaribaleDeclared) {
        let clickedDigit = e.target.textContent;
        num1 = num1 + clickedDigit;
        screenDisplay.textContent = num1;
    }
    else if (isFirstVaribaleDeclared && num1) {
        console.log("yay,we'are here")
        isSecondVariableDeclared = true;
        let clickedDigit = e.target.textContent;
        num2 = num2 + clickedDigit;
        screenDisplay.textContent = num2;
    }
    // else if (operator === '=') {
    //     operate(+num1, operator, +num2)
    // }

}

digitBtns.forEach((item) =>
    item.addEventListener("click", clickHandler)
)


let backspaceBtn = document.querySelector("#backspace-btn");
backspaceBtn.addEventListener("click", function (e) {
    let len = screenDisplay.textContent.length;
    console.log(len)
    if (len) {
        if (num2) {
            num2 = num2.slice(0, -1);
            screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
        }
        else {
            num1 = num1.slice(0, -1);
            screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
        }

    }

})