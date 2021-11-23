let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
const eventFunctionSubmit = (e) => {
  e.preventDefault();
  console.log("it works?");
};
