const starttime = Date.now();
window.CSS.registerProperty({
  name: "--h87-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#002611",
});

document.body.innerHTML = `<div id="hashtag-87"></div>`;

// CSS.registerProperty({
//   name: "--writing-suggestions",
//   syntax: "writingSuggestions",
// });

const h87 = document.body; // document.getElementById("hashtag-87");
h87.style.backgroundColor = "#002611";

const h87h1 = document.createElement("h1");
h87h1.textContent = "#87";
h87h1.style.fontFamily = "Helvetica Neue, Helvetica Sans, sans-serif";
h87h1.style.fontSize = "169%";
h87h1.style.backgroundColor = "#290260";
h87h1.style.color = "transparent";
const h87div1 = document.createElement("div");

const h87login = document.createElement("button");
h87login.textContent = "login";
h87login.setAttribute("width", "100%");
h87login.setAttribute("height", "100%");
h87login.style.padding = 0;
h87login.style.margin = 0;

h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);
