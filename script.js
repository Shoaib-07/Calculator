let display = document.getElementById('display');

function appendToDisplay(value) {
    let expression = display.value.trim();

    // Check if the display value already contains the square symbol (^2)
    if (expression.endsWith('^2')) {
        // If the value is a number, display an error
        if (!isNaN(parseFloat(value))) {
            display.value = 'Error: Enter an operator after square';
            return;
        } else if (['+', '-', '*', '/', '='].includes(value)) {
            display.value += value;
        } else if (value === '⌫') {
            backspace();
        }
    } else {
        if (value === '⌫') {
            backspace();
        } else {
            display.value += value;
        }
    }
}

function backspace() {
    let currentValue = display.value;
    // Remove the last character from the display value
    display.value = currentValue.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    let expression = display.value.replace('^2', '**2'); // Replacing '^2' with '**2' for proper evaluation
    let result;
    try {
        result = eval(expression);
    }
    catch (error) {
        result = 'Error';
    }
    display.value = result;
}
