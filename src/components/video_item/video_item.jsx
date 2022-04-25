import React from "react";
import VideoList from "../video_list/video_list";
import styles from "./video_item.module.css";
// import React, { useEffect, useState } from "react";

const VideoItem = ({ video }) => {
  // const VideoItem = ({ video: { snippet } }) => {
  // const base = "https://www.youtube.com/watch?v=";
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <a href={video.link}>
          <img
            className={styles.thumbnail}
            src={video.thumbnail}
            alt={video.title}
          ></img>
        </a>
        <div className={styles.metadata}>
          <a href={VideoList.link}>
            <p className={styles.title}>{video.title}</p>
            <p className={styles.channel}>{video.channel}</p>
            <p className={styles.viewCount}>
              조회수 {(video.viewCount/10000).toFixed(1)}만 · 
              <span> 좋아요 {(video.likeCount/1000).toFixed(1)}k</span> · 
              <span>{video["year-month-date"]}</span>
            </p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
