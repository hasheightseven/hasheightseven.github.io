// import title and tab title query element
import { nota, tabtitle } from './titles.js';
tabtitle.textContent = nota;
// import default styles
import defaultstyles from './styles.js';
document.head.appendChild(defaultstyles);
// import favicon.ico
import favicon from './favicon.js';
document.head.appendChild(favicon);
// import react cdns
import reactnbabel from './hesimports.js';
reactnbabel();
// import main content
import main from './main.jsx';
document.body.appendChild(main);