const nota = new String("#eightseven".toUpperCase());

const tabtitle = document.querySelector('title');
tabtitle.textContent = "#EightSSeven";
tabtitle.style.fontFamily = "Chokokutai";
const bgImage = new Image("/assets/media/heslogo.svg");
document.body.style.background = bgImage;

const main = document.createElement("main");
document.body.appendChild(main);

const logoimg = document.createElement("div");

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
window.onload = setRandomEmojiBackground();
