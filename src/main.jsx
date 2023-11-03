import React from "react";
import App from "/src/App";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainContext from "./context/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>
);
