import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./Context.jsx";
("./Context.jsx");
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
