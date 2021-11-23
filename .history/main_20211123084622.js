let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let input = document.getElementById("inp").value;
console.log(input);
const person = {
  name: "sujan dari",
  age: 25,
};
const arrayForData = ["abc", "234"];
function eventFunctionSubmit(e) {
  e.preventDefault();
  localStorage.setItem("user", JSON.stringify(person));
  localStorage.setItem("arr", JSON.stringify(arrayForData));
  console.log("it works?");
}
