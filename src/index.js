// name of the app nota
export const hes = new String("#eightseven".toUpperCase());
let hestabtitle = document.querySelector("title");
hestabtitle.textContent = hes;
hestabtitle.style.letterSpacing = "8%";
// html element bgColor
document.documentElement.style.background = "#000";
// body bgColor & color
document.body.style.background = "#000";
document.body.style.color = "#fff";

import { hesmain } from "./hesmain.js" 
hesmain.style.fontSize = "2.6em";
// append root element to body
document.body.appendChild(hesmain);
// website tab title

const hestitlenlogo = document.createElement("div");
const hestitle = document.createElement("h1");
hestitle.textContent = nota;
hestitle.style.fontSize = "26px";
hesmain.appendChild(hestitlenlogo);
hestitlenlogo.appendChild(hestitle);
const heslogo = document.createElement("img");
hestitlenlogo.appendChild(heslogo);
