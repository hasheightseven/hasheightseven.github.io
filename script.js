// Sample projects data
const projects = [
  { title: "Project One", description: "A web app for managing tasks." },
  { title: "Project Two", description: "A portfolio website template." },
];

// Function to display projects
function displayProjects() {
  const projectGallery = document.getElementById("projectGallery");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectGallery.appendChild(projectDiv);
  });
}

// Handle contact form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent! Thank you for your inquiry.");
  });

// Handle new order button
document.getElementById("newOrderBtn").addEventListener("click", function () {
  const order = prompt("Enter your order details:");
  const orderList = document.getElementById("orderList");
  const orderItem = document.createElement("div");
  orderItem.textContent = order;
  orderList.appendChild(orderItem);
});

// Initialize the app
displayProjects();
