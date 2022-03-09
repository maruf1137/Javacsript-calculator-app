/*

class Calculator {
  curOperand;
  prevOperand;
  operation;

  constructor(prevDisplay, curDisplay) {
    this.curOperand = curDisplay;
    this.prevOperand = prevDisplay;
    this.clear();
    this.updateDisplay();
    console.log(this.curOperand, this.prevOperand);
  }

  clear() {
    this.prevOperand = "";
    this.curOperand = "0";
    console.log("col");
  }

  delete() {
    this.curOperand = this.curOperand.toString().slice(0, -1);
    if (this.curOperand === "0" || this.curOperand === "") {
      this.curOperand = "0";
    }
    // if (this.curOperand === "") {
    //   this.curOperand = "0";
    // }
  }

  appendNumber(number) {
    if (this.curOperand === "0") {
      this.curOperand = "";
      this.curOperand = this.curOperand.toString() + number;
    } else {
      if (number === "." && this.curOperand.includes(".")) return;
      this.curOperand = this.curOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.curOperand === "0") return;
    if (this.prevOperand !== "") {
      this.compute();
    } else {
      this.operation = operation.innerHTML;
      this.prevOperand = `${this.curOperand}${this.operation}`;
      this.curOperand = "0";
      this.updateDisplay();
    }
  }

  compute() {
    let computation;
    const prev = parseFloat(this.prevOperand);
    const cur = parseFloat(this.curOperand);
    if (isNaN(prev) || isNaN(cur)) return;

    switch (this.operation) {
      case "+":
        computation = prev + cur;
        break;
      case "-":
        computation = prev - cur;
        break;
      case "/":
        computation = prev / cur;
        break;
      case "*":
        computation = prev * cur;
        break;

      default:
        return;
        break;
    }

    this.curOperand = computation;
    this.prevOperand = "";
  }

  updateDisplay() {
    curDisplay.innerHTML = this.curOperand;
    prevDisplay.innerHTML = this.prevOperand;
  }
}

const numberBtns = document.querySelectorAll("[data-value]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalBtns = document.querySelector("[data-equal]");
const deleteBtns = document.querySelector("[data-del]");
const resetBtns = document.querySelector("[data-reset]");
const prevDisplay = document.querySelector(".prev-display");
const curDisplay = document.querySelector(".cur-display");

const calculator = new Calculator(prevDisplay, curDisplay);

numberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number.innerHTML);
    calculator.updateDisplay();
  });
});

resetBtns.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.chooseOperation(operation);
    calculator.updateDisplay();
  });
});

equalBtns.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteBtns.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
*/

class Calculator {
  prevOperand;
  curOperand;
  operation;
  constructor(prevDisplay, curDisplay) {
    this.prevOperand = prevDisplay;
    this.curOperand = curDisplay;
    this.clear();
  }

  clear() {
    this.prevOperand = "";
    this.curOperand = "0";
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === "." && this.curOperand.includes(".")) return;
    if (this.curOperand !== "0") {
      this.curOperand = this.curOperand.toString() + number;
    } else {
      this.curOperand = number;
    }
  }

  chooseOperation(operation) {
    this.operation = operation;
    if (this.curOperand === "0" || this.curOperand === ".") return;
    if (this.prevOperand !== "") {
      this.compute();
    } else {
      this.prevOperand = this.curOperand + operation;
      this.curOperand = "0";
    }
  }

  compute() {
    let computation;
    const prev = parseFloat(this.prevOperand);
    const cur = parseFloat(this.curOperand);
    if (isNaN(prev) || isNaN(cur)) return;

    switch (this.operation) {
      case "+":
        computation = prev + cur;
        break;
      case "-":
        computation = prev - cur;
        break;
      case "*":
        computation = prev * cur;
        break;
      case "/":
        computation = prev / cur;
        break;

      default:
        return;
    }

    this.curOperand = computation;
    this.prevOperand = "";
  }

  delete() {
    this.curOperand = this.curOperand.toString().slice(0, -1);
    if (this.curOperand === "") this.curOperand = "0";
  }

  updateDisplay() {
    prevDisplay.innerHTML = this.prevOperand;
    curDisplay.innerHTML = this.curOperand;
  }
}

const numberBtns = document.querySelectorAll("[data-value]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalBtns = document.querySelector("[data-equal]");
const deleteBtns = document.querySelector("[data-del]");
const resetBtns = document.querySelector("[data-reset]");
const prevDisplay = document.querySelector(".prev-display");
const curDisplay = document.querySelector(".cur-display");

const calculator = new Calculator(prevDisplay, curDisplay);

numberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    const numberText = number.innerHTML;
    calculator.appendNumber(numberText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((operation) => {
  operation.addEventListener("click", () => {
    operationText = operation.innerHTML;
    calculator.chooseOperation(operationText);
    calculator.updateDisplay();
  });
});

equalBtns.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

resetBtns.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtns.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
