const starttime = Date.now();

const mediascreenstyle = document.createElement("style");
mediascreenstyle.setAttribute("type", "text/css");
mediascreenstyle.setAttribute("media", "screen");
mediascreenstyle.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
const h87 = document.body;
h87.style.backgroundColor = "#002611";
h87.appendChild(mediascreenstyle);

const h87h1 = document.createElement("div");
h87h1.textContent = "#87";
h87h1.style.fontFamily = "Helvetica Neue, Helvetica Sans, sans-serif";
h87h1.style.fontSize = "8em";
h87h1.style.backgroundColor = "transparent";
h87h1.style.color = "transparent";
h87h1.style.textShadow = "0 0 0.011em #959200";
h87h1.style.paddingBottom = "0.45em";
h87h1.style.paddingInline = "0.45em";
h87h1.addEventListener("mouseover", function () {
  h87h1.style.cursor = "pointer";
});
h87h1.addEventListener("click", function () {
  window.location.href = "/";
});

const h87div1 = document.createElement("div");
h87div1.style.width = "100%";
h87div1.style.height = "100%";

const h87login = document.createElement("button");
h87login.setAttribute("type", "button");
h87login.textContent = "login";
h87login.style.letterSpacing = "0.11em";
h87login.style.color = "#959200";
h87login.style.padding = "0 1.1em 0 2.6em";
h87login.style.fontSize = "2.6em";
h87login.style.border = "none";
h87login.style.borderRadius = "0 1.1em 1.1em 0";
h87login.style.boxShadow = "inset 0 0 0.87em #959200";
h87login.style.margin = 0;
h87login.style.backgroundColor = "transparent";
h87login.addEventListener("click", function () {
  window.location.href = "/login";
});
h87login.addEventListener("mouseover", function () {
  h87login.style.cursor = "pointer";
  h87login.style.textShadow = "0 0 0.11em #002611";
  h87login.style.boxShadow = "0 0 0.11em 0 #959200";
});

h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);
