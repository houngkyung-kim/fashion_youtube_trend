import React, { useState } from "react";
import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Recent from "./components/recent/recent";
import Keyword from "./components/keyword/keyword";
import Wordclouds from "./components/wordclouds/wordclouds";
import Monthly from "./components/monthly/monthly";
import Navigation from "./components/navigation/navigation";

function App({ youtube, collected_women, collected_men, arr }) {
  const [gen, setGen] = useState("women");

  const changeGender = (gender) => {
    if (gender === "women") {
      setGen("men");
    } else {
      setGen("women");
    }
  };

  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation changeGender={changeGender} gen={gen}/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                youtube={youtube}
                gen={gen}
              />
            }
          />
          <Route path="/recent" element={<Recent youtube={youtube} gen={gen} />} />
          <Route path="/keyword" element={<Keyword youtube={youtube} gen={gen} />} />
          <Route
            path="/monthly/:id"
            element={<Monthly arr={arr} youtube={youtube} gen={gen} />}
          />
          {/* <Route path="/keyword?q=:id" element={<Keyword youtube={youtube} />} /> */}
          <Route path="/wordclouds" element={<Wordclouds arr={arr} gen={gen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
