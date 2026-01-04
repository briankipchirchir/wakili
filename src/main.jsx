import "aos/dist/aos.css";
import AOS from "aos";
import "./styles/main.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

