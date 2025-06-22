let num1 ="";
let num2 ="";
//Basic arithmetic functions
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

let displayText = document.querySelector("#displayText"); 
let result = ""

function operate(num1, operator, num2) {
    
    if(operator === "+") {
        result = add(num1, num2);
        displayText.textContent = Math.round(result * 100) / 100;
    }
    else if(operator === "-") {
        result = subtract(num1, num2);
        displayText.textContent = Math.round(result * 100) / 100;
    }
    else if(operator === "*") {
        result = multiply(num1, num2);
        displayText.textContent = Math.round(result * 100) / 100;
    }
    else if(operator === "/") {
        result = divide(num1, num2);
        displayText.textContent = Math.round(result * 100) / 100;
    }
}
let operatorIs = false;
let content =""
function foundOperator(sign) {
    if(operatorIs === false) {
        content += sign;
        operatorIs = true;
        operator = sign;
        displayText.textContent = content;
    }
    //if the user has already entered an operator
    else if(operatorIs) {
        calculate();
        num1 = result;
        num2 = "";
        operator = "";
        result = "";
        displayText.textContent = num1;

        content += sign;
        operatorIs = true;
        operator = sign;
        displayText.textContent = content;
    }
}
function handleDigits(digits) {
    content += digits;
    if(operatorIs != true) {
        num1 += digits;
    }
    else{
        num2 += digits;
    }
    displayText.textContent = content;
}
function equals() {
    calculate();
    num1 = result;
    num2 = "";
    operator = "";
    operatorIs = false;
    result = "";
    content = "";
    content += num1
}
function calculate() {
    if(result != "") {
        num1 = result;
    }
    num1 = Number(num1);
    num2 = Number(num2);
    operate(num1, operator, num2);
}
function reset() {
    num1 = "";
    num2= "";
    content ="";
    result ="";
    operator ="";
    operatorIs = false;
    displayText.textContent ="";
}
const btnPlus = document.querySelector("#btnPlus");
btnPlus.addEventListener("click", () => foundOperator("+"));
const btnSubtract = document.querySelector("#btnSubtract");
btnSubtract.addEventListener("click", () => foundOperator("-"));
const btnMultiply = document.querySelector("#btnMultiply");
btnMultiply.addEventListener("click", () => foundOperator("*"))
const btnDivide = document.querySelector("#btnDivide");
btnDivide.addEventListener("click", () => foundOperator("/"))

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", () => equals());

const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", () => reset());

const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn0 = document.querySelector("#btn0");

btn7.addEventListener("click", () => handleDigits("7"));
btn8.addEventListener("click", () => handleDigits("8"));
btn9.addEventListener("click", () => handleDigits("9"));
btn4.addEventListener("click", () => handleDigits("4"));
btn5.addEventListener("click", () => handleDigits("5"));
btn6.addEventListener("click", () => handleDigits("6"));
btn1.addEventListener("click", () => handleDigits("1"));
btn2.addEventListener("click", () => handleDigits("2"));
btn3.addEventListener("click", () => handleDigits("3"));
btn0.addEventListener("click", () => handleDigits("0"));