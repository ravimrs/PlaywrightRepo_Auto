console.log("Hello Ravi");

let count = 0;
const increaseButton = document.getElementById("increment");
const decreaseButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const counterDisplay = document.getElementById("counter");

function increaseCounter() {
  count++;
  DisplayCounter();
}

function DisplayCounter() {
  counterDisplay.textContent = count;
}

increaseButton.addEventListener("click", increaseCounter);

decreaseButton.addEventListener("click", function () {
  count--;
  DisplayCounter();
});

resetButton.addEventListener("click", function () {
  count = 0;
  DisplayCounter();
});
