const nota = new String("#eightseven".toUpperCase());

const tabtitle = document.querySelector('title');
tabtitle.textContent = "#EightSSeven";
tabtitle.style.fontFamily = "Chokokutai";
const bgImage = new Image("/assets/media/heslogo.svg");
document.body.style.background = bgImage;

const logosvg = document.createElementNS(SVGAElement, "/assets/media/heslogo.svg");
main.appendChild(logosvg);
const main = document.createElement("main");
document.body.appendChild(main);

//main.addEventListener("load", () => {
    //main.setAttribute("width", screen.availWidth);
    //main.setAttribute("height", screen.availHeight);
    //main.style.backgroundColor = "#112";
    //main.style.color = "#042995";
    
    //main.setAttribute("background-color") = "rgba(126,126,126,0.5)";
    
//});

const logoimg = document.createElement("div");
//ogoimg.appendChild(fs.read("/assets/media/Bg-Img-HES.png"));
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
