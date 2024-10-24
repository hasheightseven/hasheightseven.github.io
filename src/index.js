const starttime = Date.now();
window.CSS.registerProperty({
  name: "--h87-bgColor",
  syntax: "<background-color>",
  inherits: false,
  initialValue: "#002611",
});
// if there is not adequate bit depth
// choose a simpler color

// document.body.style.color = "#FACE08";

// clear the existing HTML content
document.body.innerHTML = `<div id="hashtag-87"></div>`;

const h87 = document.getElementById("hashtag-87");
h87.style.backgroundColor = "var(--h87-bgColor)";

const h87h1 = document.createElement("h1");
const h87div1 = document.createElement("div");

h87.addEventListener("load", function (event) {
  event.preventDefault();
  // the whole html goes here
  h87.appendChild(h87h1 + h87div1);
});
