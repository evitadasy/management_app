import React from "react";
import ProjectsContextProvider from "./store/projects-context.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsContextProvider>
      <App />
    </ProjectsContextProvider>
  </React.StrictMode>
);
