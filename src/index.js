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
h87h1.style.textShadow = "0 0 0.026em #323232";
h87h1.style.paddingLeft = "0.54em";
const h87div1 = document.createElement("div");
h87div1.style.width = "100%";
h87div1.style.height = "100%";

const h87login = document.createElement("button");
h87login.textContent = "login";
h87login.style.color = "#323232";
h87login.setAttribute("width", "250px");
h87login.style.padding = "auto 1.1em auto 2.6em";
h87login.style.fontSize = "2.6em";
h87login.setAttribute("type", "button");
h87login.style.border = "none";
h87login.style.borderRadius = "0 2.6em 2.6em 0";
h87login.style.boxShadow = "inset 0 0 0.54em #323232";
h87login.style.margin = 0;
h87login.style.backgroundColor = "transparent";
h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);
