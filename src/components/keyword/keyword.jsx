import React, { useRef, useState } from "react";
import VideoList from "../video_list/video_list";
import styles from "./keyword.module.css";
import SearchAnalysis from "../search_analysis/searchAnalysis";

function Keyword({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [results, setResults] = useState([]);

  const search = (keyword) => {
    youtube.search(keyword).then(result=> {
      // result[0];
      setResults(result[0]);
      setVideos(result[1]);
    });
  };

  const inputRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    // console.log("submitted")
    const value = inputRef.current.value;
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
