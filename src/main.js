import { bgImage } from "./index.js";
const main = document.createElement("main");
//document.body.appendChild(main);
main.style.width = screen.availWidth;
main.style.height = screen.availHeight;
main.style.backgroundImage = bgImage;
main.style.backgroundRepeat = "no-repeat";
main.style.backgroundSize = "cover";
main.style.backgroundPosition = "center";
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.justifyContent = 'center';

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
export default main;