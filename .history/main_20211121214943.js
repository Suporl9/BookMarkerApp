let button = document.querySelector(".formSec");
const eventFunctionSubmit = (e) => {
  e.preventDefault();
  console.log("it works?");
};

button.addEventListener("submit", eventFunctionSubmit);
