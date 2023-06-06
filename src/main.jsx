import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QuestionContextProvider } from "./context/QuestionContext.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionContextProvider>
      <App />
    </QuestionContextProvider>
  </React.StrictMode>
);
