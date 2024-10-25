import React from "react";
import ReactDOM from "/react-dom/client";
import "./index.css";
import App from "./App";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

const rootelement = document.createElement("div");
rootelement.setAttribute("id", "root");
document.body.appendChild(rootelement);
const root = ReactDOM.createRoot(rootelement);

root.render(`
  <React.StrictMode>
    <Provider store=${store}>
      <Routes />
    </Provider>
  </React.StrictMode>
  `);
