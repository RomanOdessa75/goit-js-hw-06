const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const handleTextInputEl = (event) => {
  if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
};

inputEl.addEventListener("input", handleTextInputEl);
