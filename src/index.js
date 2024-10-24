const starttime = Date.now();
window.CSS.registerProperty({
  name: "--h87-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#002611",
});
// if there is not adequate bit depth
// choose a simpler color

// document.body.style.color = "#FACE08";

// clear the existing HTML content
document.body.innerHTML = `<div id="hashtag-87"></div>`;
CSS.registerProperty({
  name: "--writing-suggestions",
  syntax: "writingSuggestions",
});
const h87 = document.getElementById("hashtag-87");
h87.style.backgroundColor = "var(--h87-color)";

const h87h1 = document.createElement("h1");
const h87div1 = document.createElement("div");

const h87login = document.createElement("button");
h87login.setAttribute("width", "100%");
h87login.setAttribute("height", "100%");
h87login.style.padding = 0;
h87login.style.margin = 0;

h87.addEventListener("load", function (event) {
  event.preventDefault();
  // the whole html goes here
  h87.appendChild(h87h1 + h87div1);
  h87div1.appendChild(h87login);
});
