import React from "react";
import { Link } from "react-router-dom";
import styles from "./wordclouds.module.css";

function Wordclouds(props) {
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
  return (
    <div className={styles.cloudDiv}>
      {arr.map((mon) => {
        return (
          <div className={styles.cloudItem}>
            <p className={styles.month}>{mon.month}월</p>
            {mon.items.map((item) => (
              <Link className={styles.wordLink} to={"/keyword?q=" + item}> 
                <span>{item}·</span>
              </Link>
            ))}
            <img
              className={styles.cloudImage}
              src={require(`../../wordclouds/cloud_${mon.month}.png`)}
              alt={mon.month[0]}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Wordclouds;
