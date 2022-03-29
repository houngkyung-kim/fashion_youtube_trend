import React, { useEffect, useState } from "react";
import VideoList from "../video_list/video_list";
import styles from "../../app.module.css";

function Recent({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.recent().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <h1 className={styles.header}>최근 올라온 Fashion 영상</h1>
      {/* <span className={styles.version}>(v1.2, 2022-03-15 )</span> */}
      <p className={styles.meta}>
        오늘은 {youtube.now.toDateString()} ({youtube.weekNumber}주차) 입니다.
      </p>
      <p className={styles.meta}>
        패션 유튜버들은 최근 이런 영상들을 만들었습니다
      </p>
      <VideoList videos={videos} />
    </>
  );
}

export default Recent;
