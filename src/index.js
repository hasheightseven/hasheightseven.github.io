const fontchokokutai = document.createElement('style');
fontchokokutai.innerText = `@import url('https://fonts.googleapis.com/css2?family=Chokokutai&display=swap');`;
import defaultstyles from './styles.js';
if (defaultstyles.hasChildNodes) {
    console.log(`styles defaults has child nodes`);
}
import main from './main.js';
import container from "./container.js";
main.appendChild(container);
import { loginform, signupform, contactform } from "./forms.js";

container.appendChild(loginform);