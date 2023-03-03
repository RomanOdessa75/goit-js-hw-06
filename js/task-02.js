const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const listArray = [];

ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");

  listEl.classList.add("item");
  listEl.textContent = ingredient;

  listArray.push(listEl);

  console.log(listArray);
});

ulEl.append(...listArray);
