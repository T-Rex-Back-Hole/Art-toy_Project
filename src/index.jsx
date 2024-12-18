import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import "./index.css";

const app = document.getElementById("app");

const root = createRoot(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
