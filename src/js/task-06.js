const formEl = document.querySelector("#validation-input");
console.log(formEl);

formEl.addEventListener("blur", (event) => {
  if (
    event.target.value.trim().length ===
    Number(formEl.getAttribute("data-length"))
  ) {
    formEl.classList.add("valid");
  } else {
    formEl.classList.add("invalid");
  }
});
