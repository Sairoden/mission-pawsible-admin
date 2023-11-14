import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./contexts/darkMode_context.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => window.location.replace("/")}
    >
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// TO DO
// 0. REFACTOR CABINS
// 1. PETS LIST
// 1.2 DELETE PET
// 2. REGISTER A PET
// 2.2 EDIT PET
// 3. DASHBOARD
