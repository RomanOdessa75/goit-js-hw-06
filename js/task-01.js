const listItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", listItemEl.length);

const totalReport = listItemEl.forEach((element) => {
  const headerEl = element.firstElementChild;
  const ulEl = element.lastElementChild;
  console.log("Category:", headerEl.textContent);
  console.log("Elements:", ulEl.children.length);
});
