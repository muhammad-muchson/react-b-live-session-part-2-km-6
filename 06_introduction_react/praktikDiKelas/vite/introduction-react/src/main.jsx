import React from "react";
import ReactDOM from "react-dom/client";
import AppRouting from "./AppRouting.jsx";
import { BrowserRouter } from "react-router-dom";
// import Hook from "./components/Hook.jsx";
// import ClassComponent from "./components/ClassComponent.jsx";
// import UseEffectComponent from "./components/UseEffectComponent.jsx";
// import ExampleReducer from "./components/ExampleReducer.jsx";
// import "./index.css";
//index.html

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  </React.StrictMode>
);
