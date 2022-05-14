// const categoriesEl = document.querySelector("#categories");

const getAmountCategoriesEl = () => {
  const listItemsArray = [...document.querySelectorAll(".item")];

  console.log("Number of categories:", listItemsArray.length);

  listItemsArray.map((item) => {
    const header = item.firstElementChild;
    const listEl = item.lastElementChild;
    const listItemsAmount = listEl.children;

    console.log("Category:", header.textContent);
    console.log("Elements:", listItemsAmount.length);
  });
};

getAmountCategoriesEl();
