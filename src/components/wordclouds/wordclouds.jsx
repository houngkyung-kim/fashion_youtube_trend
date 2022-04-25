import React from "react";
import { Link } from "react-router-dom";
import styles from "./wordclouds.module.css";

function Wordclouds({arr, gen}) {

  return (
    <div className={styles.cloudDiv}>
      {arr.map((mon) => {
        return (
          <div key={mon.month} className={styles.cloudItem}>
            <Link className={styles.monthLink} to={"/monthly/" + mon.month}>
              <p className={styles.month}>{mon.month}월</p>
            </Link>
            {mon.items.map((item) => (
              <Link key={mon.month+item} className={styles.wordLink} to={"/keyword?q=" + item}>
                <span>{item}·</span>
              </Link>
            ))}
            <img
              className={styles.cloudImage}
              // src={require(`../../wordclouds_men/cloud_${mon.month}.png`)}
              src={
                (gen === 'women')?
                require(`../../wordclouds_women/cloud_${mon.month}.png`) :
                require(`../../wordclouds_men/cloud_${mon.month}.png`)
              }
              alt={mon.month[0]}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Wordclouds;
