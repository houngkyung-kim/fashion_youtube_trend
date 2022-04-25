import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recent from "./components/recent/recent";
import Keyword from "./components/keyword/keyword";
// import Navigation from "./components/navigation/navigation";
import Wordclouds from "./components/wordclouds/wordclouds";
import Youtube from "./service/youtube";
import Monthly from "./components/monthly/monthly";

let gender;
const handleGender = () => {
  console.log(`currentGender: ${gender}`)
  if (gender === "women") {
    gender = "men";
  } else {
    gender = "women";
  }
  console.log(`handleGender: ${gender}`)
};

// const [gender, setGender] = useState('women')
const collected_women = require("./collected_women.json");
const collected_men = require("./collected_men.json");
// console.log(gender)
// const collected = require("./collected_men.json");

const arr = [
  {month: "01", items: ["가방", "니트", "원피스", "패딩", "신발", "코트", "팬츠", "자켓", "부츠"]},
  {month: "02", items: ["가방", "자켓", "원피스", "팬츠", "바지", "신발", "니트", "청바지"]},
  {month: "03", items: ["자켓", "가방", "원피스", "청바지", "가디건", "팬츠", "신발", "슬랙스", "니트", "셔츠"]},
  {month: "04", items: ["가방", "자켓", "원피스", "셔츠", "신발", "청바지", "팬츠", "운동화", "블라우스"]},
  {month: "05", items: ["원피스", "가방", "신발", "티셔츠", "블라우스", "샌들", "셔츠", "자켓", "청바지"]},
  {month: "06", items: ["가방", "원피스", "티셔츠", "신발", "샌들", "바지", "자켓", "팬츠"]},
  {month: "07", items: ["원피스", "가방", "신발", "티셔츠", "샌들", "셔츠", "브라", "잠옷"]},
  {month: "08", items: ["가방", "원피스", "신발", "자켓", "청바지", "바지", "목걸이"]},
  {month: "09", items: ["자켓", "가방", "니트", "부츠", "트렌치코트", "원피스", "가디건", "신발", "셔츠"]},
  {month: "10", items: ["니트", "자켓", "부츠", "가방", "코트", "패딩", "가디건", "신발", "청바지", "팬츠", "바지"]},
  {month: "11", items: ["코트", "패딩", "니트", "가방", "부츠", "신발", "자켓", "팬츠"]},
  {month: "12", items: ["가방", "코트", "니트", "패딩", "자켓", "부츠", "원피스"]}
];

const youtube = new Youtube(collected_women, collected_men);
// const youtube = new Youtube

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<App youtube={youtube} gender={gender} handleGender={handleGender} />} />
        <Route path="/recent" element={<Recent youtube={youtube} />} />
        <Route
          path="/monthly/:id"
          element={<Monthly arr={arr} youtube={youtube} />}
        />
        <Route path="/keyword" element={<Keyword youtube={youtube} />} />
        {/* <Route path="/keyword?q=:id" element={<Keyword youtube={youtube} />} /> */}
        <Route path="/wordclouds" element={<Wordclouds arr={arr} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
