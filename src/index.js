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

const h87h1 = document.createElement("h1");
h87h1.textContent = "#87";
h87h1.style.fontFamily = "Helvetica Neue, Helvetica Sans, sans-serif";
h87h1.style.fontSize = "300%";
h87h1.style.backgroundColor = "#290260";
h87h1.style.color = "transparent";
h87h1.style.textShadow = "0 0 0.26em #002611";

const h87div1 = document.createElement("div");
h87div1.style.width = "100%";
h87div1.style.height = "100%";
h87div1.style.borderRadius = "0 2.6em 2.6em 0";
h87div1.style.boxShadow = "inset 0 0 8% radial-gradient(#002611, #000429)";

const h87login = document.createElement("button");
h87login.textContent = "login";
h87login.setAttribute("width", "250px");
h87login.style.paddingLeft = "26px";
h87login.style.fontSize = "300%";
h87login.style.margin = 0;

h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);
