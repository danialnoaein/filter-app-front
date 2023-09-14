import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/router.tsx";
import AppTheme from "./theme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppTheme>
      <Router />
    </AppTheme>
  </React.StrictMode>
);
