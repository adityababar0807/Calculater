const display = document.getElementById('display');

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    // Prevent operator as the first input
    if (display.value === '' && operators.includes(input)) {
        alert('Invalid format: Cannot start with an operator!');
        return;
    }

    // Prevent consecutive operators (e.g., "++" or "**")
    if (operators.includes(lastChar) && operators.includes(input)) {
        alert('Invalid format: Cannot enter consecutive operators!');
        return;
    }

    display.value += input;
}

// Function to remove last digit
function removeLastDigit() {
    display.value = display.value.slice(0, -1);
}

// Function to clear everything
function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value;

        // Convert percentage to decimal (e.g., 50% -> 0.5)
        if (expression.includes('%')) {
            expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
                return num / 100;
            });
        }

        display.value = eval(expression);  // Evaluates the expression
    } catch (error) {
        alert('Invalid expression! Please check your input.');
        display.value = '';
    }
}
