let num1;
let num2;
let op;

function operate(num1, num2, op) {
    if(op === "-") {
        return num1 - num2;
    }
    else if(op === "+") {
        return num1 + num2;
    }
    else if(op === "*") {
        return num1 * num2;
    }
    else if(op === "/") {
        return num1 / num2;
    }
}