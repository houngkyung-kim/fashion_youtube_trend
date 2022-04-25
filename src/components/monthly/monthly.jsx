import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../app.module.css";
import VideoList from "../video_list/video_list";

function Monthly({ youtube, arr }) {
  const location = useLocation();
  // console.log(location)
  const [videos, setVideos] = useState([]);
  
  const selectedMonth = location.pathname.split("/")[2]
  // console.log(selectedMonth);
  const index = arr.map(elem => elem.month).indexOf(selectedMonth)
  // console.log(index);
  const items = arr[index].items;
  // console.log(items)

  useEffect(() => {
    youtube.monthlyPopular(selectedMonth).then((videos) => setVideos(videos));
  }, [youtube, selectedMonth]);

  return (
    <>
      <h1 className={styles.header}>Fashion Youtube 트렌드</h1>
      {/* <span className={styles.version}>(v1.2, 2022-03-15 )</span> */}
      {/* <p className={styles.meta}>
        오늘은 {youtube.now.toDateString()} ({youtube.weekNumber}주차) 입니다.
      </p> */}
      <p className={styles.meta}>
        패션 유튜버들은 {selectedMonth}월에 이런 영상들을 만들었습니다
      </p>
      <p className={styles.meta}>
        주요 품목은{" "}
        {items.map((item) => (
          <Link className={styles.wordLink} to={"/keyword?q=" + item}>
            <span className={styles.item}>{item} · </span>
          </Link>
        ))}{" "}
        입니다
      </p>
      <VideoList videos={videos} />
    </>
  );
}

export default Monthly;
