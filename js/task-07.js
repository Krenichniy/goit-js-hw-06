const refs = {
  input: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

function changeFontSize(event) {
  const rangeValueCurrent = event.currentTarget.value;
  console.log(rangeValueCurrent);
  refs.textEl.style.fontSize = `${rangeValueCurrent}px`;
}

refs.input.addEventListener("input", changeFontSize);
