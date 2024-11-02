const loginform = document.createElement('form');
const signupform = document.createElement('form');
const contactform = document.createElement('form');

const label = document.createElement("h3");
label.style.fontFamily = "chokokutai";
label.style.color = "#112692";

for (i in [loginform,signupform,contactform]){
    i.appendChild(label);
    }

export { loginform, signupform, contactform }