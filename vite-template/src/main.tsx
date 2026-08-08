import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProviders } from "./components/shared/AppProviders/AppProviders";
import { App } from "./pages/App";
import "./i18n/setup";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
