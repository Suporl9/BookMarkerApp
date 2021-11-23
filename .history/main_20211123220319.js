//// @ts-check

let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let sitename = document.getElementById("sitenameid");
let url = document.getElementById("urlid");

let hello = localStorage.getItem("data");
let retrivedData = JSON.parse(hello);
console.log("retrieved", retrivedData);

let arrayForData = [];
if (hello != null) {
  retrivedData.forEach((element) => {
    arrayForData.push(element);
  });
} else {
  arrayForData = [];
}

console.log("arrayfordata", arrayForData);

function eventFunctionSubmit(e) {
  e.preventDefault();

  console.log("it works?");
  let site = { sitenamekey: sitename.value, urlkey: url.value };
  arrayForData.push(site);

  localStorage.setItem("data", JSON.stringify(arrayForData));
}

console.log("hello", JSON.parse(hello));

// let toBeRenderedArrayList = [];
// let listt = document.getElementById("ullist");

// arrayForData.forEach((arr) => {
//   toBeRenderedArrayList.push(
//     "<div class=nonesensediv>" +
//       "<p class=pip>" +
//       arr.sitenamekey +
//       "</p>" +
//       "<h4>" +
//       arr.urlkey +
//       "</h4>" +
//       "</div>"
//   );
// });
// listt.innerHTML = toBeRenderedArrayList.join(" ");
function fetchBookMarkData() {
  let fetchedBookmarks = JSON.parse(localStorage.getItem("data"));
  let nonesensediv = document.getElementById("nonesensediv");

  nonesensediv.innerHTML = "";

  for (i = 0; i < fetchedBookmarks.length; i++) {
    let name = fetchedBookmarks[i].sitenamekey;
    let url = fetchedBookmarks[i].urlkey;

    console.log("name", name, url);
  }
}
