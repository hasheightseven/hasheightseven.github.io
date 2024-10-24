const starttime = Date.now();

const mediascreenstyle = document.createElement("style");
mediascreenstyle.setAttribute("type", "text/css");
mediascreenstyle.setAttribute("media", "screen");
mediascreenstyle.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
const h87 = document.body;
h87.style.backgroundColor = "#002611";
h87.appendChild(mediascreenstyle);

const h87h1 = document.createElement("h1");
h87h1.textContent = "#87";
h87h1.style.fontFamily = "Helvetica Neue, Helvetica Sans, sans-serif";
h87h1.style.fontSize = "420%";
h87h1.style.backgroundColor = "transparent";
h87h1.style.color = "transparent";
h87h1.style.textShadow =
  "0 0 0.08em radial-gradient(69deg, #002611, #000429, #002611, #000429)";

const h87div1 = document.createElement("div");
h87div1.style.width = "100%";
h87div1.style.height = "100%";

const h87login = document.createElement("button");
h87login.textContent = "login";
h87login.setAttribute("width", "250px");
h87login.style.padding = "0 0.08em";
h87login.style.fontSize = "2.6em";
h87login.style.border = "none";
h87login.style.borderRadius = "0 2.6em 2.6em 0";
h87login.style.boxShadow = "inset 0 0 8% radial-gradient(#002611, #000429)";
h87login.style.margin = 0;

h87.appendChild(h87h1);
h87.appendChild(h87div1);
h87div1.appendChild(h87login);

const canvas = document.createElement("canvas");
h87.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", "92em");
canvas.setAttribute("height", "92em");
// Circle properties
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 30;
let speed = 2;
let angle = 0;
let color = "blue";

// Function to handle mouse click for color change
canvas.addEventListener("click", () => {
  // Generate a random color
  color = `hsl(${Math.random() * 360}, 100%, 50%)`;
});

// Function to handle mouse movement for resizing the circle
canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Calculate distance from the circle's center
  const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
  radius = distance < 50 ? 50 - distance : 30; // Limit radius to a minimum
});

// Function to handle keyboard input for changing speed
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    speed += 0.5; // Increase speed
  } else if (event.key === "ArrowDown") {
    speed = Math.max(0.5, speed - 0.5); // Decrease speed, limit to a minimum
  }
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Calculate new position
  x = canvas.width / 2 + Math.sin(angle) * 100; // Circular motion
  y = canvas.height / 2 + Math.cos(angle) * 100; // Circular motion
  angle += speed * 0.01; // Increment the angle for the next frame

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color; // Use the current color
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(animate); // Request the next frame
}

// Start the animation
animate();
