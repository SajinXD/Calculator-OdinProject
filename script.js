const addFunc = (a, b) => a + b;
const multiplyFunc = (a, b) => a * b;

const subtractFunc = (a, b) => a - b;
const divideFunc = (a, b) => {
  if (b === 0) {
    return "Error can't be divide by zero.";
  }
  return a / b;
};

let firstNum;
let currOperator;
let secondNum;
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

  buttons[id].addEventListener("click", () => {
    if (button.classList.contains("digit")) {
      currInput += button.textContent;
      display.textContent = currInput;
      
    }
  });
});
