let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
const person = {
  name: "sujan dari",
  age: 25,
};
const arrayForData = ["abc", "234"];
function eventFunctionSubmit(e) {
  e.preventDefault();
  window.localStorage.setItem("user", JSON.stringify(person));
  console.log("it works?");
}
