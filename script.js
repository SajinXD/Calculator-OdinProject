const addFunc = (a, b) => a + b;
const multiplyFunc = (a, b) => a * b;

// output value differs from which value is first or second.
const subtractFunc = (a, b) => a - b;
const divideFunc = (a, b) => {
  if (b === 0) {
    return "Error can't be divide by zero.";
  }
  return a / b;
};

let firstNum = null;
let operation = null;
let secondNum = null;

function operate(operate, a, b) {
    switch (operate){
        case '+':
            return addFunc(a,b);
        case '-':
            return subtractFunc(a,b);
        case '*':
            return multiplyFunc(a*b);
        case '/':
            return divideFunc(a/b);
        default: // debug aid, what if user inputs diff value.
            return null;
    }
}

