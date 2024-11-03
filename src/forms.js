const loginform = document.createElement('form');
const signupform = document.createElement('form');
const contactform = document.createElement('form');

const label = document.createElement("h3");
label.textContent = "username";
label.style.fontFamily = "chokokutai";
label.style.color = "#112692";

const userinput = document.createElement("input");
userinput.setAttribute("type", "text");

const passinput = document.createElement("input");
passinput.setAttribute("type", "password");

loginform.addEventListener("load", () => {
loginform.appendChild(label);
loginform.appendChild(userinput);
loginform.appendChild(passinput);
});
signupform.appendChild("load", () => {
signupform.appendChild(label);
signupform.appendChild(userinput);
signupform.appendChild(passinput);
});
contactform.addEventListener("load", () => {
contactform.appendChild(label);
contactform.appendChild(userinput);
contactform.appendChild(passinput);
});
export { loginform, signupform, contactform }