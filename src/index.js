import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recent from "./components/recent/recent";
import Keyword from "./components/keyword/keyword";
import Navigation from "./components/navigation/navigation";
import Wordclouds from "./components/wordclouds/wordclouds";
import Youtube from "./service/youtube";

const collected = require("./collected.json");

const youtube = new Youtube(collected);
// const youtube = new Youtube

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<App youtube={youtube} />} />
        <Route path="/recent" element={<Recent youtube={youtube} />} />
        <Route path="/keyword" element={<Keyword youtube={youtube} />} />
        <Route path="/wordclouds" element={<Wordclouds />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
