import React, { useEffect, useRef, useState } from "react";
import VideoList from "../video_list/video_list";
import styles from "./keyword.module.css";
import SearchAnalysis from "../search_analysis/searchAnalysis";
import { useLocation, useNavigate } from "react-router-dom";

function Keyword({ youtube }) {
  // function Keyword({ youtube, location }) {
  const [videos, setVideos] = useState([]);
  const [results, setResults] = useState([]);
  const location = useLocation();

  const search = (keyword, month) => {
    youtube.search(keyword, month).then((result) => {
      setResults(result[0]);
      setVideos(result[1]);
    });
  };

  const inputRef = useRef();
  // const monthRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    // console.log(event.target);
    event.preventDefault();
    // console.log("submitted")
    const value = inputRef.current.value;
    // const month = event.target.innerHTML.split("월")[0];
    // month && console.log(month)
    // const newURL = location.pathname + location.search + `&m=${month}`;
    // console.log(newURL);
    // location.search = value
    const month = ""
    navigate(`/keyword?q=${value}`, { replace: true });
    value && search(value, month);
  };
  const onClick = (event) => {
    handleSearch(event);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };
  
  const monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  const monthClick = (event) => {
    // console.log(event)
    // console.log(event.target.innerHTML);
    // console.log(event.target.innerHTML.split("월")[0]);
    const keyword = decodeURI(location.search.split("?q=")[1], "UTF-8");
    // const keyword = location;
    // console.log(keyword)
    let month = event.target.innerHTML.split("월")[0];
    if (month === "전체") month = "";
    // if (month === "전체") {
    //   month = ""
    // }
    // (month === "전체") && month = "";
    // console.log(month)
    // console.log(typeof(month))
    // const newURL = location.pathname + location.search + `&m=${month}`;
    // console.log(newURL);
    // console.log(monthRef.current.innerHTML.split("월")[0]);

    search(keyword, month);
  }


  // if (location.search) {
  //   handleSearch()
  // }

  useEffect(() => {
    const key = location.search.split("?q=")[1];
    if (key) {
      inputRef.current.value = decodeURI(key, "UTF-8");
      handleSearch(new Event("none"));
    }
    // handleSearch()
  }, []);

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="search"
          placeholder="검색어"
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchButton} type="submit" onClick={onClick}>
          검색
        </button>
      </form>
      {/* <p className={styles.meta}>키워드를 검색해보세요</p> */}
      {results.length > 0 && (<>
        <SearchAnalysis results={results} videos={videos} />
      <div className={styles.monthSelect}>
        <button className={styles.monthSelectButton} onClick={monthClick}>전체</button>
        {monthArray.map((m) => (
          <button key={m} className={styles.monthSelectButton} onClick={monthClick}>{m}월</button>
        ))}
      </div>
      </>
      )}
      <VideoList videos={videos} />
    </>
  );
}

export default Keyword;
