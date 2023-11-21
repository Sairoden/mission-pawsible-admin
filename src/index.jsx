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
// 1. Change sortBy of Users Pages to sortBy of Supabase

// Optional
// Register Pet
// Add Image API
// If user select a breed, it should show the image of that Pet
