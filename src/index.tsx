import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { DarkModeContextProvider } from "./context/dark-mode-context";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <DarkModeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DarkModeContextProvider>
  </BrowserRouter>
    </React.StrictMode>

  
 
);

reportWebVitals();