// src/index.js
import React from '/react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18+

import App from './App.js'; // Import your main App component


const main = document.createElement("main");
main.setAttribute('id', 'hesmain')

// The root element where your React app will be injected
const root = ReactDOM.createRoot(document.getElementById('hesmain'));

// Render your App component inside the root element
root.render(`
    <React.StrictMode>
    <App />
  </React.StrictMode>
`);


export default main;
// import { bgImage } from "./defaults.js";
//document.body.appendChild(main);
// main.style.width = 'auto';
// main.style.height = '100vh';
//main.style.backgroundColor = "rgb(11,26,92)";
// main.style.backgroundImage = bgImage;
// main.style.backgroundRepeat = "no-repeat";
// main.style.backgroundSize = "contain";
// main.style.backgroundPosition = "center";
// main.style.display = 'flex';
// main.style.flexDirection = 'column';
// main.style.alignItems = 'center';
// main.style.justifyContent = 'center';
// main.style.border = `solid 2.6px #f1f1f1`;
// main.style.borderRadius = `2.6%`;
