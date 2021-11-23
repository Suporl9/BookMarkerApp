let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let sitename = document.getElementById("sitenameid");
let url = document.getElementById("urlid");
// console.log(input.value);
// const person = {
//   name: "sujan dari",
//   age: 25,
// };

const arrayForData = [];
function eventFunctionSubmit(e) {
  e.preventDefault();
  // localStorage.setItem("user", JSON.stringify(person));
  // localStorage.setItem("arr", JSON.stringify(arrayForData));
  console.log("it works?");
  let site = { sitenamekey: sitename.value, urlkey: url.value };
  arrayForData.push(site);
  // console.log(sitename.value);
  // console.log(url.value);
  // console.log(arrayForData);
  localStorage.setItem("data", JSON.stringify(arrayForData));
}
const hello = localStorage.getItem(JSON.parse("data"));
console.log(hell0);
