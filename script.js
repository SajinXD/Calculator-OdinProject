let firstNum = null;
let currOperator = null;
let secondNum = null;
let currInput = "";
let lastSecondNum = null;
let afterEquals = false;

const display = document.querySelector("#display");

function operate(operator, a, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !==0 ? a/b : "Error: Can't be divided by Zero.";
    default: return "Error: operate function";
  }
}

function handleDigit(digit){
  if (afterEquals || currInput === "0" || currInput === ""){
    currInput = digit;
  }else{
    currInput += digit;
  }
  display.textContent = currInput;
}

function handleOperator(op){
  if (currInput !== ""){
    firstNum = currInput;
    currInput= "";
    lastSecondNum = null;
    currOperator = op;
    afterEquals = false;
  }
}

function handleEquals(){
  if (firstNum !== null && currOperator !== null){
    if (lastSecondNum === null){
      secondNum = currInput;
      lastSecondNum = secondNum;
    }else{
      secondNum = lastSecondNum;
    }
    const output = operate(currOperator, Number(firstNum), Number(secondNum));
    display.textContent = output;
    currInput = output.toString();
    firstNum = output.toString();
    afterEquals = true;
  }
}

function handleClear(){
  firstNum = null;
  currOperator = null;
  secondNum = null;
  currInput = "";
  display.textContent = "0";
  lastSecondNum = null;
  afterEquals = false;
}

function handleDecimal(){
  if (!currInput.includes(".")){
    if (afterEquals || currInput === "0" || currInput === ""){
      currInput = "0.";
      afterEquals = false;
      
    }else{
      currInput + ".";
    }
  }
  display.textContent = currInput;
}

function handlePercentage(){
  const num = Number(currInput);
  const result = num /100;
  currInput = result.toString();
  display.textContent = currInput;
  afterEquals = false;
}

function handleBackSpace(){
  if (currInput.length > 1) {
    currInput = currInput.slice(0, -1);
  }else {
    currInput = "0";
  }
  display.textContent = currInput;
  afterEquals = false;
}

function mainCalculationFunc (value){
  if (!isNaN(value)){
    handleDigit(value);
  }else if(["+", "-", "*", "/"].includes(value)){
    handleOperator(value);
  }else if(value === "=" || value === "Enter"){
    handleEquals();
  }else if(value === "."){
    handleDecimal();
  }else if(value === "AC"){
    handleClear();
  }else if(value === "Backspace" || value === "⌫"){
    handleBackSpace();
  }else if(value === "%"){
    handlePercentage();
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (event)=>{
    const value = event.target.textContent;
    mainCalculationFunc(value);
  })
})

document.addEventListener("keydown", (event) =>{
  mainCalculationFunc(event.key);
})