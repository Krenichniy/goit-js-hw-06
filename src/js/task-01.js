const categoriesEl = document.querySelector("#categories");

const getAmountCategoriesEl = () => {
  const listItemsArray = [...document.querySelectorAll(".item")];

  console.log("Number of categories:", listItemsArray.length);

  listItemsArray.map((item) => {
    // item = document.querySelector("");
    // console.log(item);
    const header = item.firstChild;
    console.log(header);
    console.log("Category:", header.textContent);
  });
};

getAmountCategoriesEl();

//   item.map((element) => {
//     console.log("Category:", element.textContent);
//   });

//   const itemList = [...document.querySelectorAll("ul")];
//   itemList.map((element) => {
//     const elementsList = [...element.children];
//     console.log("Elements:", elementsList.length);
//   });
