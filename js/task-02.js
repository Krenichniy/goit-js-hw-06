const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngridients = document.querySelector("#ingredients");

const newArr = [];
ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = element;
  newArr.push(listItemEl);
});

listOfIngridients.append(...newArr);
