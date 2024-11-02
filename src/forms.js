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
for (i in { loginform, signupform, contactform }) {
    i.appendChild(label);
    i.appendChild(userinput);
    i.appendChild(passinput);
}

export { loginform, signupform, contactform }