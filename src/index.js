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
h87h1.style.textAlign = "center";
h87h1.style.fontFamily = "Helvetica Neue, Helvetica Sans, sans-serif";
h87h1.style.fontSize = "8em";
h87h1.style.backgroundColor = "transparent";
h87h1.style.color = "transparent";
h87h1.style.textShadow = "0 0 0.011em #959200";
h87h1.style.paddingBottom = h87h1.style.paddingTop = "0.26em";
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
h87div1.style.display = "flex";
h87div1.style.flexDirection = "column";

const h87login = document.createElement("button");
h87login.setAttribute("type", "button");
h87login.textContent = "login";
h87login.style.color = "#959200";
// h87login.style.padding = "0 1.1em 0 2.6em";
h87login.style.fontSize = "2.6em";
h87login.style.fontFamily = "Playwrite GB S, cursive";
h87login.style.fontOpticalSizing = "auto";
h87login.style.fontWeight = "<weight>";
h87login.style.fontStyle = "normal";
h87login.style.border = "none";
// h87login.style.borderRadius = "0 1.1em 1.1em 0";
h87login.style.boxShadow = "inset 0 0 0.87em #959200";
h87login.style.marginBottom = "8%";
h87login.style.backgroundColor = "transparent";
h87login.addEventListener("click", function () {
  window.location.href = "/login";
});
h87login.addEventListener("mouseover", function () {
  h87login.style.cursor = "pointer";
  h87login.style.textShadow = "0 0 0.87em #959200";
  h87login.style.boxShadow = "0 0 0.87em 0 #959200";
});
h87login.addEventListener("mouseout", function () {
  h87login.style.textShadow = "0 0 0.87em #959200";
  h87login.style.boxShadow = "0 0 0.87em 0 #959200";
});

const h87signup = document.createElement("button");
h87signup.setAttribute("type", "button");
h87signup.textContent = "sign up";
h87signup.style.textAlign = "center";
h87signup.setAttribute("width", "100%");
h87signup.setAttribute("height", "100%");
h87signup.style.fontFamily = "Playwrite GB S, cursive";
h87signup.style.fontOpticalSizing = "auto";
h87signup.style.fontWeight = "<weight>";
h87signup.style.fontStyle = "normal";
// h87signup.style.letterSpacing = "0.11em";
h87signup.style.color = "#959200";
// h87signup.style.padding = "0 1.1em 0 2.6em";
h87signup.style.fontSize = "2.6em";
h87signup.style.border = "none";
// h87signup.style.borderRadius = "0 1.1em 1.1em 0";
h87signup.style.boxShadow = "inset 0 0 0.87em #959200";
h87signup.style.marginBottom = "8%";
h87signup.style.backgroundColor = "transparent";
h87signup.addEventListener("click", function () {
  window.location.href = "/login";
});
h87signup.addEventListener("mouseover", function () {
  h87signup.style.cursor = "pointer";
  h87signup.style.textShadow = "0 0 0.87em #959200";
  h87signup.style.boxShadow = "0 0 0.87em 0 #959200";
});
h87signup.addEventListener("mouseout", function () {
  h87signup.style.textShadow = "0 0 0.87em #959200";
  h87signup.style.boxShadow = "0 0 0.87em 0 #959200";
});

h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);
h87div1.appendChild(h87signup);
