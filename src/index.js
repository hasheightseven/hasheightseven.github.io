// html element bgColor
document.documentElement.style.background = "#000";
// body bgColor & color
document.body.style.background = "#000";
document.body.style.color = "#fff";

// create root element
const rootelement = document.createElement("main");
// append root element to body
document.body.appendChild(rootelement);
// name of the app nota
const nota = new string("#eightseven".toUpperCase());
// website tab title
let hestabtitle = document.querySelector("title");
hestabtitle.textContent = nota;

const hestitlenlogo = document.createElement("div");
const hestitle = document.createElement("h1");
hestitle.textContent = nota;
hestitle.style.fontSize = "26px";
rootelement.appendChild(hestitlenlogo);
hestitlenlogo.appendChild(hestitle);
const heslogo = document.createElement("img");
hestitlenlogo.appendChild(heslogo);