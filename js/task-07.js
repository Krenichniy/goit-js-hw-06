const refs = {
  input: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

// refs.textEl.style.fontSize = refs.input.value;
function changeFontSize(event) {
  const rangeValueCurrent = event.target.value;

  refs.textEl.style.fontSize = `${rangeValueCurrent}px`;
}

refs.input.addEventListener("input", changeFontSize);
refs.input.dispatchEvent(new Event("input"));
// копипастив у знайомого але з методом вже розібрався, хоча ми такого ще не вчили
