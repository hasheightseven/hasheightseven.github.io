// import fonts
import { fontchokokutai } from './fonts.js';
document.head.appendChild(fontchokokutai);
// import title and tab title query element
import { nota, tabtitle } from './titles.js';
tabtitle.textContent = nota;
// import default styles
import defaultstyles from './styles.js';
document.head.appendChild(defaultstyles);
// import favicon.ico
import favicon from './favicon.js';
document.head.appendChild(favicon);
// import main content
// import main from './main.js';
// document.body.appendChild(main);
// import greeting
import greeting, { something } from './greeting.js';
// something();
document.body.appendChild(greeting);