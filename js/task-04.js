let counterValue = 0;

const decrementBtnEl = document.querySelector(
  "button[data-action = 'decrement']"
);

console.log(decrementBtnEl.dataset.action);

const incrementBtnEl = document.querySelector(
  "button[data-action = 'increment']"
);
console.log(incrementBtnEl.dataset.action);

decrementBtnEl.addEventListener("click", () => {
  console.log("Button was clicked decr");
  counterValue -= 1;
});

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  console.log("Button was clicked incr");
});
console.log(counterValue);
