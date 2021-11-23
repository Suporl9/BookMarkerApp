//// @ts-check

let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let sitename = document.getElementById("sitenameid");
let url = document.getElementById("urlid");
// console.log(input.value);
// const person = {
//   name: "sujan dari",
//   age: 25,
// };
let hello = localStorage.getItem("data");
let retrivedData = JSON.parse(hello);
console.log("retrieved", retrivedData);
const newObj = [...retrivedData];
let arrayForData = [];
// arrayForData.push(newObj);
console.log("arrayfordata", arrayForData);
console.log("newObj", newObj);
// if(hello  !=  null){
//   arrayForData.push
// }else{}
// if(localStorage.getItem)
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
// let hello = localStorage.getItem("data");

console.log(JSON.parse(hello));
