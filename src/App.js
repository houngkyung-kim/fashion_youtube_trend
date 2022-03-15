import "./app.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

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

  useEffect(() => {
    let result = [];
    let filteredResult = [];
    let video;

    try {
      result = require("./collected.json");
    } catch (error) {
      console.log(error);
    }
    console.log(result);
    // console.log(result[0])
    // console.log(result[0].viewCount)
    // console.log(result[0].videoId)

    for (const video of result) {
      console.log(video.weekNumber);
      if (
        video.weekNumber >= weekNumber &&
        weekNumber + 1 >= video.weekNumber &&
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
      <h1 className="App">Fashion Youtube 트렌드 분석</h1>
      <span>(v1.0, 2022-03-15 )</span>
      <p>
        오늘은 {now.toDateString()} ({weekNumber}주차) 입니다.
      </p>
      <p>패션 유튜버들은 이맘 때즘 이런 영상들을 만들었습니다</p>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
