import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App({youtube}) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);


  return (
    <>
      <h1 className={styles.header}>Fashion Youtube 트렌드</h1>
      {/* <span className={styles.version}>(v1.2, 2022-03-15 )</span> */}
      <p className={styles.meta}>
        오늘은 {youtube.now.toDateString()} ({youtube.weekNumber}주차) 입니다.
      </p>
      <p className={styles.meta}>
        패션 유튜버들은 이맘 때즘 이런 영상들을 만들었습니다
      </p>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
