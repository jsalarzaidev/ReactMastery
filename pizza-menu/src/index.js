import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  // App Component
  const x = "jonas";
  return <h1>This is from App</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
