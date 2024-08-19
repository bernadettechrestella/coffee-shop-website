// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Make sure global styles are included

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
