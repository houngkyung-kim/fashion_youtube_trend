import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = ({ changeGender, gen }) => {
  // console.log(gen)
  const handleClick = () => {
    // console.log("clicked")
    changeGender(gen);
  };
  return (
    <nav className={styles.navi}>
      <div className={styles.navDiv}>
        <Link className={styles.link} to="/">
          <span className={styles.span}>Home</span>
        </Link>
        <Link className={styles.link} to="/recent">
          <span className={styles.span}>최근 영상</span>
        </Link>
        <Link className={styles.link} to="/keyword">
          <span className={styles.span}>키워드</span>
        </Link>
        <Link className={styles.link} to="/wordclouds">
          <span className={styles.span}>클라우드</span>
        </Link>
        {/* <label className={styles.switch}>
          <input type="checkbox" onClick={handleClick} />
          <span className={styles.slider}>
            <span className={styles.knobs}></span>
            <span className={styles.layer}></span>
          </span>
        </label> */}
        <div className={styles.button}>
          <input
            type="checkbox"
            onClick={handleClick}
            className={styles.checkbox}
          />
          <div className={styles.knobs}></div>
          <div className={styles.layer}></div>
        </div>
        {/* <div className={styles.buttonCover}></div> */}
        {/* <div className={styles.toggleButtonCover}></div> */}
      </div>
    </nav>
  );
};

export default Navigation;
