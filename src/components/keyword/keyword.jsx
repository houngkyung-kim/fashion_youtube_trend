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

  const search = (keyword) => {
    youtube.search(keyword).then((result) => {
      setResults(result[0]);
      setVideos(result[1]);
    });
  };

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // console.log("submitted")
    const value = inputRef.current.value;
    // location.search = value
    navigate(`/keyword?q=${value}`, { replace: true });
    value && search(value);
  };
  const onClick = (event) => {
    handleSearch(event);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  // if (location.search) {
  //   handleSearch()
  // }

  useEffect(() => {
    const key = location.search.split("?q=")[1]
    if (key) {
      inputRef.current.value = decodeURI(key, "UTF-8");
      handleSearch(new Event('none'));
    }
    // handleSearch()
  },[])

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
      {results.length > 0 && (
        <SearchAnalysis results={results} videos={videos} />
      )}
      <VideoList videos={videos} />
    </>
  );
}

export default Keyword;
