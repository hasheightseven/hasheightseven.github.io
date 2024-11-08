// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18+

import App from './App.js'; // Import your main App component

// import title and tab title query element
import { nota, tabtitle } from './titles.js';
tabtitle.textContent = nota;
// import default styles
import defaultstyles from './styles.js';
document.head.appendChild(defaultstyles);
// import favicon.ico
import favicon from './favicon.js';
document.head.appendChild(favicon);
// import main content
import main from './main.js';
main.setAttribute('id', 'hesmain')
document.body.appendChild(main);

// The root element where your React app will be injected
const root = ReactDOM.createRoot(document.getElementById('hesmain'));

// Render your App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
