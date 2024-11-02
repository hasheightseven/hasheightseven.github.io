const nota = new String("#8seven".toUpperCase());


const bgImage = "url(./assets/media/heslogo.svg)";

const defaultstyles = document.createElement("style");
document.head.appendChild(defaultstyles);
defaultstyles.setAttribute("type", "text/css");
defaultstyles.setAttribute("media", "screen");
defaultstyles.innerText = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

const tabtitle = document.querySelector('title');
tabtitle.textContent = "#8Seven";
tabtitle.style.fontFamily = "Chokokutai";

// document.body.style.background = bgImage;

import main from './main.js';
document.body.appendChild(main);
const logoimg = document.createElement("div");
logoimg.innerHTML = bgImage;
//main.appendChild(logoimg);

const emojiText = document.createElement("h1");
emojiText.textContent = nota;
emojiText.style.color = '#001928';
emojiText.style.alignSelf = 'flex-end';

main.appendChild(emojiText);

function getRandomEmoji() {
  const emojis = ["🍕", "🌮", "🍣", "🍩", "🍒", "🌈", "🚀", "🌎", "🎉", "💥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function setRandomEmojiBackground() {
  const randomEmoji = getRandomEmoji();
  emojiText.style.backgroundImage = `repeating-linear-gradient(45deg, ${randomEmoji} 0, ${randomEmoji} 20%)`;
}

// Set a random emoji background on load
setRandomEmojiBackground();
document.head.appendChild(`<meta name="copyright" content="Copyright &COPY; 2024 #8Seven" />`);