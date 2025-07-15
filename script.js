const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const resultMessage = document.getElementById('resultMessage');

function displayMessage(message, isError = false) {
    resultMessage.textContent = message;
    if (isError) {
        resultMessage.classList.add('error-message');
    } else {
        resultMessage.classList.remove('error-message');
    }
}

function clearMessage() {
    resultMessage.textContent = '';
    resultMessage.classList.remove('error-message');
}

function calculate(operation) {
    clearMessage();

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        displayMessage('Please enter valid numbers.', true);
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                displayMessage('Cannot divide by zero!', true);
                return;
            }
            result = num1 / num2;
            break;
        default:
            displayMessage('Invalid operation!', true);
            return;
    }

            displayMessage(`Result: ${result.toFixed(2)}`);
    }

    addBtn.addEventListener('click', () => calculate('add'));
    subtractBtn.addEventListener('click', () => calculate('subtract'));
    multiplayBtn.addEventListener('click', () => calculate('multiply'));
    divideBtn.addEventListener('click', () => calculate(divide));

    console.log("Basic Calculator Project JavaScript loaded!");