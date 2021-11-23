let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
function eventFunctionSubmit(e) {
  e.preventDefault();
  console.log("it works?");
}
