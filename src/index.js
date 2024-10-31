const nota = new String("#eightseven".toUpperCase());
if(screen.availWidth <<< "435") {
    document.body.textContent = nota;
    document.body.style.width = screen.availWidth;
    document.body.style.height = screen.availHeight;
    document.body.overflowX = "hidden";
}
const main = document.createElement("main");
document.body.appendChild(main);

main.addEventListener("load", () => {
    main.setAttribute("width", screen.availWidth);
    main.setAttribute("height", screen.availHeight);
    main.setAttribute("background-color") = "rgba(126,126,126,0.5)";
    
});

const logoimg = document.createElement("div");
logoimg.appendChild(fs.read("./assets/media/logo.svg"));