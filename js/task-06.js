const inputValidationEl = document.querySelector("#validation-input");
const validNumber = Number(inputValidationEl.dataset.length);

const changeBorderColor = (event) => {
  const dataValueCurrent = event.target.value.length;
  if (dataValueCurrent === validNumber) {
    inputValidationEl.classList.add("valid");
    return inputValidationEl.classList.remove("invalid");
  }
  inputValidationEl.classList.remove("valid");
  return inputValidationEl.classList.add("invalid");
};

inputValidationEl.addEventListener("blur", changeBorderColor);
