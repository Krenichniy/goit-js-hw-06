function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorSwitcher: document.querySelector(".change-color"),
  currentColor: document.querySelector(".color"),
};

refs.colorSwitcher.addEventListener("click", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.currentColor.textContent = `${getRandomHexColor()}`;
}
