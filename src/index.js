const starttime = Date.now();
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});

// clear the existing HTML content
document.body.innerHTML = `<div id="hashtag-87"></div>`;

const h87 = document.getElementById("hashtag-87");

const h87h1 = document.createElement("h1");
const h87div1 = document.createElement("div");

h87.addEventListener("load", function (event) {
  event.preventDefault();
  // the whole html goes here
  h87.appendChild(h87h1);
  h87.appendChild(h87div1);
});
