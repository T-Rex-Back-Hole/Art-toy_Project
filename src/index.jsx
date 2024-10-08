import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";

const app = document.getElementById("app");

const root = createRoot(app);

root.render(<Home />);