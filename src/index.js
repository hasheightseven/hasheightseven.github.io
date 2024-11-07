import { nota, tabtitle } from './titles.js';
tabtitle.textContent = nota;
import defaultstyles from './styles.js';
document.head.appendChild(defaultstyles);
import favicon from './favicon.js';
document.head.appendChild(favicon);
import main from './main.js';
document.body.appendChild(main);