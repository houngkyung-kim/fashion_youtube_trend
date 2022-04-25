import React, { useEffect, useState } from "react";
import VideoList from "../video_list/video_list";
import styles from "./home.module.css";
// import Navigation from "../navigation/navigation";

function Home({ youtube, gen }) {
  // let gender = 'women';
  // console.log(`AppGender: ${gender}`);
  const [videos, setVideos] = useState([]);
  // const [gender, setGender] = useState("women");

  useEffect(() => {
    console.log(`useEffect: ${gen}`)
    youtube.mostPopular(gen).then((result) => setVideos(result));
  }, [youtube, gen]);

  return (
    <>
      {/* <Navigation changeGender={changeGender} /> */}
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

export default Home;
