import './fonts.js' as fonts;
import defaultstyles from './styles.js';
if (defaultstyles.hasChildNodes) {
    console.log(`styles defaults has child nodes`);
    console.log(defaultstyles.childNodes);
}
import main from './main.js';
import container from "./container.js";
main.appendChild(container);
import { loginform, signupform, contactform } from "./forms.js";

container.appendChild(loginform);