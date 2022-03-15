import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App() {
  const [videos, setVideos] = useState([]);
  // Get Week of Year
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  const weekNumber =
    Math.ceil(
      ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
    ) - 1;
  //

  // Get Day of Year
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  // console.log("Day of year: " + day);

  useEffect(() => {
    let result = [];
    let filteredResult = [];

    try {
      result = require("./collected.json");
    } catch (error) {
      console.log(error);
    }

    for (const video of result) {
      const myDate = new Date(video['year-month-date'])
      // console.log(myDate)
      const dayInYear = Math.floor((myDate - new Date(myDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
      // console.log(dayInYear)
      // console.log(video.weekNumber);
      if (
        dayInYear >= day+3 &&
        dayInYear <= day+9 &&
        video.viewCount > 100000
      ) {
        filteredResult.push(video);
      }
    }

    // setVideos(result)
    setVideos(filteredResult);
  }, []);

  return (
    <>
      <h1 className={styles.header}>Fashion Youtube 트렌드</h1>
      <span className={styles.version}>(v1.2, 2022-03-15 )</span>
      <p className={styles.meta}>
        오늘은 {now.toDateString()} ({weekNumber}주차) 입니다.
      </p>
      <p className={styles.meta}>
        패션 유튜버들은 이맘 때즘 이런 영상들을 만들었습니다
      </p>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
