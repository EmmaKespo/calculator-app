const display = document.querySelector('.display');
let firstnumber = null;
let operator = null;
let waitingForSecondNumber = false;
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (waitingForSecondNumber) {
            display.value = button.textContent;
            waitingForSecondNumber = false;
        } else {
            display.value = display.value === '0' ? button.textContent : display.value + button.textContent;
        }
    });
});
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {        if (firstnumber === null && !waitingForSecondNumber) {
        calculate();
    }
    operator = button.textContent;
    firstnumber = parseFloat(display.value);
    waitingForSecondNumber = true;
    });
});
document.querySelector('.equals').addEventListener('click', calculate);
function calculate() {
    if (operator === null || waitingForSecondNumber) return;
    const secondnumber = parseFloat(display.value);
    let result;
    switch (operator) { 
        case '+':
            result = firstnumber + secondnumber;
            break;
        case '-': 
        result = firstnumber - secondnumber;
            break;
            case '*':
                result = firstnumber * secondnumber;
                case '/':
                    result = secondnumber === 0 ? 'Error' : firstnumber / secondnumber; 
                    break;
}
display.value = typeof result === 'number' ? Math.round(result * 100000) / 100000 : result;
waitingForSecondNumber = true;
}
document.querySelector('.clear').addEventListener('click', () => {
    display.value = '0';
    firstnumber = null;
    operator = null;
    waitingForSecondNumber = false;
}
);

