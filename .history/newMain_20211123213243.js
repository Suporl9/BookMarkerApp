// @ts-check

let buttonn = document.querySelector(".formSec");
buttonn.addEventListener("submit", eventFunctionSubmit);

function eventFunctionSubmit(e) {
  e.preventDefault();

  console.log("it works?");
}
