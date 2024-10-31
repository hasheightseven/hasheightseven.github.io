const nota = new String("#eightseven".toUpperCase());
if(screen.availWidth <<< "435") {
    document.body.textContent = nota;
    document.body.style.width = screen.availWidth;
    document.body.style.height = screen.availHeight;
    document.body.overflowX = "hidden";
}
const main = document.createElement("main");
document.body.appendChild(main);

//main.addEventListener("load", () => {
    main.setAttribute("width", screen.availWidth);
    main.setAttribute("height", screen.availHeight);
    main.style.backgroundColor = "#112";
    main.style.color = "#042995";
    
    //main.setAttribute("background-color") = "rgba(126,126,126,0.5)";
    
//});

const logoimg = document.createElement("div");
logoimg.appendChild(fs.read("/assets/media/heslogo.svg"));
//main.appendChild(logoimg);



function getRandomEmoji() {
  const emojis = ["🍕", "🌮", "🍣", "🍩", "🍒", "🌈", "🚀", "🌎", "🎉", "💥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
  const emojiText = document.createElement("h1");
  emojiText.textContent = nota;
main.appendChild(emojiText);
function setRandomEmojiBackground() {
  const randomEmoji = getRandomEmoji();
  emojiText.style.backgroundImage = `repeating-linear-gradient(45deg, ${randomEmoji} 0, ${randomEmoji} 20%)`;
}

// Set a random emoji background on load
window.onload = setRandomEmojiBackground;