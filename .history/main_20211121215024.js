let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let eventFunctionSubmit = (e) => {
  e.preventDefault();
  console.log("it works?");
};
