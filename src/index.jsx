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
// 1. REGISTER/EDIT FORM
// 2. Add more breed
// 2.1 If Cat -> Render Breed for Cat -> DISABLE If there is NO PET TYPE
// 2.2 If Dog -> Render Breed for Dog -> DISABLE If there is NO PET TYPE
// 3. Add more size

