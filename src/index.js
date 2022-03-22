import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recent from "./components/recent";
import Keyword from "./components/keyword";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/keyword" element={<Keyword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
