import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Handle redirect from 404.html for clean URLs on GitHub Pages
if (sessionStorage.getItem('redirectPath')) {
  const redirectPath = sessionStorage.getItem('redirectPath');
  sessionStorage.removeItem('redirectPath');
  if (redirectPath) {
    window.history.replaceState(null, '', redirectPath);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
