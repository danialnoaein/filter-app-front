import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/router.tsx";
import AppTheme from "./theme/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <Router />
      </AppTheme>
    </Provider>
  </React.StrictMode>
);
