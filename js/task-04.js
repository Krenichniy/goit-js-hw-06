let counterValue = 0;

const refs = {
  decrementBtnEl: document.querySelector("button[data-action = 'decrement']"),
  incrementBtnEl: document.querySelector("button[data-action = 'increment']"),
  currentValue: document.querySelector("#value"),
};

refs.decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  refs.currentValue.textContent = `${counterValue}`;
});

refs.incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  refs.currentValue.textContent = `${counterValue}`;
});
