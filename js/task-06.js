const formEl = document.querySelector("#validation-input");
console.log(formEl.getAttribute("data-length"));

formEl.addEventListener("blur", (event) => {
  if (event.target.value.trim().length == formEl.getAttribute("data-length")) {
    formEl.classList.add("valid");
    if (formEl.classList.contains("invalid")) {
      formEl.classList.remove("invalid");
    }
  } else {
    if (formEl.classList.contains("valid")) {
      formEl.classList.remove("valid");
    }
    formEl.classList.add("invalid");
  }
});
