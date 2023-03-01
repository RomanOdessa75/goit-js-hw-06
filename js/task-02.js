const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const listOfEl = ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");

  listEl.classList.add("item");
  listEl.textContent = ingredient;

  console.log(listEl);

  ulEl.append(listEl);
});
