const addFunc = (a, b) => a + b;
const multiplyFunc = (a, b) => a * b;

const subtractFunc = (a, b) => a - b;
const divideFunc = (a, b) => {
  if (b === 0) {
    return "Error can't be divide by zero.";
  }
  return a / b;
};

let firstNum = null;
let currOperator = null;
let secondNum = null;
let currInput = "";

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return addFunc(a, b);
    case "-":
      return subtractFunc(a, b);
    case "*":
      return multiplyFunc(a, b);
    case "/":
      return divideFunc(a, b);
    default: // debug, what if user inputs diff value.
      return null;
  }
}

const display = document.querySelector("#display");

const buttonIds = [
  "allclear",  "squareroot",  "percentage",  "divide",
  "seven",  "eight",  "nine",  "multiply",  "four",
  "five",  "six",  "subtract",  "one",  "two",
  "three",  "add",  "zero",  "decimalpoint",  "equalsto",
];

const buttons = {};
buttonIds.forEach((id) => {
  buttons[id] = document.querySelector(`#${id}`);
});

Object.keys(buttons).forEach((id) => {

  const button = buttons[id];

  button.addEventListener("click", () => {
    if (button.classList.contains("digit")) { 
      if (currInput === "0"){
        currInput = button.textContent;
      }else{
        currInput += button.textContent;
      }
      display.textContent = currInput;
    }else if(button.classList.contains("operator")) {
      firstNum = currInput;
      currInput= "";
      currOperator = button.textContent;
    }else if (id === "equalsto"){
      if (firstNum !== null && currOperator !== null){
        secondNum = currInput;
        const output = operate(currOperator, Number(firstNum), Number(secondNum));
        display.textContent = output;
        currInput = output.toString(); 
        // currInput will be assign to firstNum (if operator is click)
        // else secondNum for further calculation if necessary 
        // and also if allclear is not press 
      }
    }else if(id === "allclear"){
      firstNum = null;
      currOperator = null;
      secondNum = null;
      currInput = "";
      display.textContent = "0";
    }else if(id === "decimalpoint"){
      if (!currInput.includes(".")){
        if (currInput === "0" || currInput === ""){
          currInput = "0.";
        }else{
          currInput += ".";
        }
      }
      display.textContent = currInput;
    }
  });
});
