const refs = {
  inputNameEl: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputNameEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.target.value) {
    refs.outputName.textContent = "Anonymous";
  } else {
    refs.outputName.textContent = event.target.value;
  }
}
