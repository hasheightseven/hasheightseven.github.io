export const nota = new String("#8seven".toUpperCase());


export const bgImage = "url(./assets/media/heslogo.svg)";

export const defaultstyles = document.createElement("style");
document.head.appendChild(defaultstyles);
defaultstyles.setAttribute("type", "text/css");
defaultstyles.setAttribute("media", "screen");
defaultstyles.innerText = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

export const tabtitle = document.querySelector('title');
tabtitle.textContent = "#8Seven";
tabtitle.style.fontFamily = "Chokokutai";

// document.body.style.background = bgImage;

import main from './main.js';

document.head.appendChild(`<meta name="copyright" content="Copyright &COPY; 2024 #8Seven" />`);