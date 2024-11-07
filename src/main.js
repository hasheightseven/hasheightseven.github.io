import { nota, tabtitle } from './titles.js';
tabtitle.textContent = nota;

const favicon = document.createElement("link");
favicon.rel = "icon/favicon";
favicon.href = "/favicon.ico";
favicon.type = "image/x-icon";
document.head.appendChild(favicon);

const bgImage = "url(./assets/media/reansparentbgeight.svg)";

const main = document.createElement("main");
//document.body.appendChild(main);
main.style.width = 'auto';
main.style.height = '100vh';
//main.style.backgroundColor = "rgb(11,26,92)";
main.style.backgroundImage = bgImage;
main.style.backgroundRepeat = "no-repeat";
main.style.backgroundSize = "contain";
main.style.backgroundPosition = "center";
// main.style.display = 'flex';
// main.style.flexDirection = 'column';
// main.style.alignItems = 'center';
// main.style.justifyContent = 'center';

document.body.appendChild(main);



// const copyrightelem = document.createElement('meta');
// copyrightelem.setAttribute('name', 'copyright');
// copyrightelem.setAttribute('content', 'Copyright &COPY; 2024 #8Seven')
// document.head.appendChild(copyrightelem);

export default main;
