//Declaring variables to display them later
let num1 = '';
let num2= '';
let op = '';

//Getting the element from HTML
const btn = document.querySelectorAll('#btn');
const inputField = document.getElementById('inputField');

//Add basic calculator function to handle addition, subtraction, multiplication, and division
function operate(num1, num2, op) {
    num1 = Number(num1);
    num2 = Number(num2)
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
        return num2 !== 0 ? num1 / num2 : "Error"
    }
}

//Add event listener to all btns
btn.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if(!isNaN(value)){
            if(!op) {
                num1 += value;
            } else {
                num2 += value;
            }
            inputField.value= num1 + op + num2;
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if(num1) {
                op = value;
                inputField.value = num1 + op + num2;
            }
        }
        else if(value === "=") {
            if(num1 && num2 && op) {
                const result = operate(num1, num2, op);
                if(result === "Error") {
                    inputField.value = "You can't do that pal"
                } else {
                    inputField.value = Math.round(result);
                    num1 = result;
                    num2 = '';
                }
            }
        }
        else if(value === "c") {
            num1 =  '';
            num2 = '';
            op = '';
            inputField.value = '';
        }
    })
})