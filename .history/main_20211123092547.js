let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let sitename = document.getElementById("sitenameid").value;
let url = document.getElementById("urlid").value;
// console.log(input.value);
// const person = {
//   name: "sujan dari",
//   age: 25,
// };
let site = { sitenamekey: sitename, urlkey: url };
const arrayForData = [];
function eventFunctionSubmit(e) {
  e.preventDefault();
  // localStorage.setItem("user", JSON.stringify(person));
  // localStorage.setItem("arr", JSON.stringify(arrayForData));
  console.log("it works?");
  arrayForData.push(site);
  console.log(sitename.value);
  console.log(url.value);
  console.log(arrayForData);
}
