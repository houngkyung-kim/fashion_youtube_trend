import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Navigation from "./components/navigation/navigation";

function App({ youtube, handleGender }) {
  // let gender = 'women';
  // console.log(`AppGender: ${gender}`);
  const [videos, setVideos] = useState([]);
  // const [gender, setGender] = useState("women");

  useEffect(() => {
    console.log('useEffect')
    youtube.mostPopular('women').then((result) => setVideos(result));
  }, [youtube]);

  const changeGender = (gender) => {
    handleGender()
    if (gender === "women") {
      gender = 'men'
    } else {
      gender = 'women'
    }
    console.log(`changeGender: ${gender}`)
    youtube.mostPopular(gender).then((result) => setVideos(result));
  };

  // console.log(gender);
  return (
    <>
      <Navigation changeGender={changeGender} />
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
