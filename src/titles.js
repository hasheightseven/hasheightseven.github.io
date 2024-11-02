const nota = new String("#8Seven");
const tabtitle = document.querySelector('title');
tabtitle.textContent = nota;
export { nota, tabtitle }

const logoimg = document.createElement("div");
//logoimg.innerHTML = bgImage;
//main.appendChild(logoimg);

const emojiText = document.createElement("h1");
emojiText.textContent = nota;
emojiText.style.fontFamily = "Chokokutai, Arial, Sans-Serif System-UI";
emojiText.style.color = '#001928';
emojiText.style.colorScheme = 'revert-layer';
emojiText.style.alignSelf = 'flex-end';

//main.appendChild(emojiText);

function getRandomEmoji() {
  const emojis = ["🍕", "🌮", "🍣", "🍩", "🍒", "🌈", "🚀", "🌎", "🎉", "💥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function setRandomEmojiBackground() {
  const randomEmoji = getRandomEmoji();
  emojiText.style.backgroundImage = `repeating-linear-gradient(45deg, ${randomEmoji} 0, ${randomEmoji} 20%)`;
}

// Set a random emoji background on load
//setRandomEmojiBackground();
