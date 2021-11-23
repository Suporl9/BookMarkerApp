let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
const person = {
  name: "sujan dari",
  age: 25,
};
function eventFunctionSubmit(e) {
  e.preventDefault();
  // localStorage.setItem("user", JSON.stringify(person));
  console.log("it works?");
}
localStorage.setItem("user", JSON.stringify(person));
