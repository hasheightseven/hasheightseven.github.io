// name of the app nota
export const hes = new String("#eightseven".toUpperCase());
let hestabtitle = document.querySelector("title");
hestabtitle.textContent = hes;
hestabtitle.style.letterSpacing = "8%";
// html element bgColor
document.documentElement.style.background = "#000";
// body bgColor & color
document.body.style.background = "#0000026";
document.body.style.color = "#ffffff87";

import { hesmain } from "./hesmain.js" 
hesmain.style.fontSize = "2.6em";
// append root element to body
document.body.appendChild(hesmain);
// website tab title

const hestitlenlogo = document.createElement("div");
const hestitle = document.createElement("h1");
hestitle.textContent = hes;
hestitle.style.color = "#ffffff87";
hestitle.style.fontSize = "26px";
hesmain.appendChild(hestitlenlogo);
hestitlenlogo.appendChild(hestitle);
const heslogo = document.createElement("img");
hestitlenlogo.appendChild(heslogo);

'
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
    '