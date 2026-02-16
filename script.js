const display = document.querySelector("#display");
const keys = document.querySelector(".keys");

let expression = "";

const updateDisplay = (value) => {
  display.textContent = value || "0";
};

const evaluateExpression = () => {
  if (!expression) return;

  try {
    const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/");
    const result = Function(`"use strict"; return (${sanitized})`)();

    if (!Number.isFinite(result)) {
      expression = "";
      updateDisplay("Error");
      return;
    }

    expression = String(result);
    updateDisplay(expression);
  } catch {
    expression = "";
    updateDisplay("Error");
  }
};

keys.addEventListener("click", (event) => {
  const key = event.target.closest("button");
  if (!key) return;

  const { value, action } = key.dataset;

  if (action === "clear") {
    expression = "";
    updateDisplay(expression);
    return;
  }

  if (action === "delete") {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
    return;
  }

  if (action === "equals") {
    evaluateExpression();
    return;
  }

  if (value) {
    expression += value;
    updateDisplay(expression);
  }
});
