document.body.addEventListener("load", () => {
    document.body.style.background = "radial-gradient(corcle, #261192, #042995, #261192, #042995, #261192, #042995, #261192, #042995)";
});

document.documentElement.style.background = "#000";
//document.body.textContent = `welcome to the café`;
document.body.style.background = "#000";
document.body.style.color = "#fff";


const rootelement = document.createElement("main");
document.body.appendChild(rootelement);

const nota = new string("#eightseven".toUpperCase());
const hestabtitle = document.querySelector("title");
hestabtitle.textContent = nota;

const hestitlenlogo = document.createElement("div");
const hestitle = document.createElement("h1");
hestitle.textContent = nota;
hestitle.style.fontSize = "26px";
rootelement.appendChild(hestitlenlogo);
hestitlenlogo.appendChild(hestitle);