let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Update UI
function updateDisplay() {
  countDisplay.textContent = count;
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrement (not below 0)
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
