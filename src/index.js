document.body.addEventListener("load", () => {
    document.body.style.background = "radial-gradient(corcle, #261192, #042995, #261192, #042995, #261192, #042995, #261192, #042995)";
});


document.body.textContent = `welcome to the café "the coffee monkey"`;



const rootelement = document.createElement("main");
document.body.appendChild(rootelement);
rootelement.textContent = "the coffee monkey".toUpperCase();
