import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//react-router-dom
import { BrowserRouter } from "react-router-dom";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrap with react-router-dom */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
