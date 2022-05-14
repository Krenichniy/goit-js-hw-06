function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  boxesEl: document.querySelector("#boxes"),
  boxesItem: document.querySelector(".boxes__item"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

function total() {
  createBoxes(refs.input.value);
}

const obj = {
  size: 30,
  step: 10,
};

const createBoxes = (amount) => {
  const { size, step } = obj;
  const newArr = [];
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.height = size + step * i + "px";
    newEl.style.width = newEl.style.height;
    newEl.style.backgroundColor = `${getRandomHexColor()}`;
    newArr.push(newEl);
  }
  refs.boxesEl.append(...newArr);
};

const destroyBoxes = () => {
  refs.boxesEl.innerHTML = "";
};

refs.btnCreate.addEventListener("click", total);

refs.btnDestroy.addEventListener("click", destroyBoxes);
