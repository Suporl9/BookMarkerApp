// @ts-check

let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);

function eventFunctionSubmit(e) {
  e.preventDefault();

  console.log("it works?");
  let site = { sitenamekey: sitename.value, urlkey: url.value };
  arrayForData.push(site);

  localStorage.setItem("data", JSON.stringify(arrayForData));
}
