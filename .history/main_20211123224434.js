// @ts-check

let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);

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

  // @ts-ignore
  let sitename = document.getElementById("sitenameid").value;
  // @ts-ignore
  let url = document.getElementById("urlid").value;

  if (!sitename || !url) {
    alert("please fill all fields");
    return;
  }
  var expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!url.match(regex)) {
    alert("Please use a valid URL");
    return false;
  }

  let site = { sitenamekey: sitename, urlkey: url };
  arrayForData.push(site);

  localStorage.setItem("data", JSON.stringify(arrayForData));
  //recall the fetchbookmarkdata so that the new modified data is seen
  fetchBookMarkData();
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

function deleteBookMark(url) {
  let fetchedBookmarks = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < fetchedBookmarks.length; i++) {
    if (fetchedBookmarks[i].urlkey == url) {
      fetchedBookmarks.splice(i, 1);
    }
  }
  localStorage.setItem("data", JSON.stringify(fetchedBookmarks));
  //recall the fetchbookmarkdata so that the new modified data is seen
  fetchBookMarkData();
}

function fetchBookMarkData() {
  let fetchedBookmarks = JSON.parse(localStorage.getItem("data"));
  let nonesensediv = document.getElementById("nonesensediv");

  nonesensediv.innerHTML = "";

  for (let i = 0; i < fetchedBookmarks.length; i++) {
    let name = fetchedBookmarks[i].sitenamekey;
    let url = fetchedBookmarks[i].urlkey;

    nonesensediv.innerHTML +=
      '<div class="innersection">' +
      "<h2>" +
      name +
      '<a target="_blank" href="' +
      url +
      '">' +
      "visit" +
      "</a>" +
      "  " +
      "<a onclick=\"deleteBookMark('" +
      url +
      '\')" href="#">' +
      "Delete" +
      "</a>" +
      "</h2>" +
      "</div>";
  }
}
