const nota = new String("#8seven".toUpperCase());

const tabtitle = document.querySelector('title');
tabtitle.textContent = "#8Seven";
tabtitle.style.fontFamily = "Chokokutai";

const defaultstyles = document.createElement("style");
document.head.appendChild(defaultstyles);
defaultstyles.setAttribute("type", "text/css");
defaultstyles.setAttribute("media", "screen");
defaultstyles.innerText = `
* {
  margin: 0;
  padding: 0;
}`;
const bgImage = "url(./assets/media/heslogocopy.svg)";
// document.body.style.background = bgImage;

const main = document.createElement("main");
document.body.appendChild(main);
// main.style.backgroundRepeat = "no-repeat";
main.style.backgroundImage = bgImage;
main.style.margin = '0';
main.style.padding = '0.26';
const logoimg = document.createElement("div");
logoimg.innerHTML = `<svg version="1.1"
	width="150" height="150"
	xmlns="http://www.w3.org/2000/svg">
	<rect width="100%" height="100%" fill="#112692" />
	<text x="26" y="26" font-size="26" text-anchor="middle" font-family="Chokokutai" fill="#f1f1f1">#</text>
	<circle cx="75" cy="50" r="35" fill="#f1f1f1" />
	<circle cx="75" cy="100" r="35" fill="#f1f1f1" />
	<circle cx="75" cy="50" r="26" fill="#112692" />
	<circle cx="75" cy="100" r="26" fill="#112692" />
	<circle cx="75" cy="50" r="17" fill="#f1f1f1" />
	<circle cx="75" cy="100" r="17" fill="#f1f1f1" />
	<circle cx="75" cy="50" r="8.5" fill="#112692" />
	<circle cx="75" cy="100" r="8.5" fill="#112692" />
	<text x="126" y="126" font-size="32" font-family="Chokokutai" text-anchor="middle" fill="#f1f1f1">7</text>
</svg>`;
main.appendChild(logoimg);

const emojiText = document.createElement("h1");
emojiText.textContent = nota;
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
window.onload = setRandomEmojiBackground();
