var screenValue = "";

function clearScreen() {
    screenValue = "";
    updateScreen();
}

function updateScreen() {
    document.getElementById("result").value = screenValue;
}

function display(value) {
    screenValue += value;
    updateScreen();
}

function calculate() {
    var result = evaluateExpression(screenValue);
    screenValue = result;
    updateScreen();
}

function evaluateExpression(expression) {
    var numbers = [];
    var operators = [];
    var number = "";
    var isNegative = false;

    for (var i = 0; i < expression.length; i++) {
        var char = expression[i];

        if (char === '-' && (i === 0 || isOperator(expression[i - 1]))) {
            isNegative = true;
        } else if (!isNaN(char) || char === '.') {
            number += char;
        } else {
            if (number !== "") {
                if (isNegative) {
                    numbers.push(-parseFloat(number));
                    isNegative = false;
                } else {
                    numbers.push(parseFloat(number));
                }
                number = "";
            }

            if (isOperator(char)) {
                while (
                    operators.length > 0 &&
                    getOperatorPrecedence(operators[operators.length - 1]) >= getOperatorPrecedence(char)
                ) {
                    numbers.push(operators.pop());
                }
                operators.push(char);
            }
        }
    }

    if (number !== "") {
        if (isNegative) {
            numbers.push(-parseFloat(number));
        } else {
            numbers.push(parseFloat(number));
        }
    }

    while (operators.length > 0) {
        numbers.push(operators.pop());
    }

    var resultStack = [];

    for (var i = 0; i < numbers.length; i++) {
        var token = numbers[i];
        if (!isOperator(token)) {
            resultStack.push(token);
        } else {
            var b = resultStack.pop();
            var a = resultStack.pop();
            if (token === '+') {
                resultStack.push(a + b);
            } else if (token === '-') {
                resultStack.push(a - b);
            } else if (token === '*') {
                resultStack.push(a * b);
            } else if (token === '/') {
                if (b !== 0) {
                    resultStack.push(a / b);
                } else {
                    alert("Division by zero is not allowed.");
                    return "";
                }
            }
        }
    }

    if (resultStack.length === 1) {
        return resultStack[0].toString();
    } else {
        alert("Invalid expression");
        return "";
    }
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function getOperatorPrecedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0; 
}
