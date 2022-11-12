import React from "react";
import { createRoot } from "react-dom/client";
import "./CSS/CSS";
import App from "./Pages/Routes/Routes";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
