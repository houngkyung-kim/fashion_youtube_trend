import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navi}>
      <div className={styles.navDiv}>
        <Link className={styles.link} to="/">
          <span>Home</span>
        </Link>
        <Link className={styles.link} to="/recent">
          <span>최근 영상</span>
        </Link>
        <Link className={styles.link} to="/keyword">
          <span>키워드</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
