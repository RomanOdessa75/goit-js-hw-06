const refs = {
  formEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};

refs.formEl.addEventListener("input", onSliderChange);

function onSliderChange(event) {
  refs.spanEl.style.fontSize = event.currentTarget.value + "px";

  console.log(event.currentTarget.value);
}
