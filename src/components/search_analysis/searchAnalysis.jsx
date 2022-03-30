import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import VideoItem from "../video_item/video_item";
import styles from "./searchAnalysis.module.css";

const SearchAnalysis = ({ results, videos }) => {
  // console.log(results);
  // console.log(videos);
  const month = results.map((video) => {
    // console.log(video.viewCount)
    return {
      view: video.viewCount,
      month: new Date(video["year-month-date"]).getMonth(),
    };
  });
  // console.log(month)
  const data = [];
  const objdata = [];
  for (let i = 1; i < 13; i++) {
    let obj = { count: 3 };
    const temp = month.filter((m) => m.month === i-1);
    const length = temp.length;
    obj["name"] = i;
    obj["count"] = length;
    const avg = (
      temp.reduce((sum, curr) => sum + curr.view, 0) /
      length /
      1000
    ).toFixed(0);
    obj["avg"] = avg > 0 ? Number(avg) : 0;
    obj["total"] = obj["avg"] * length;
    data.push(length);
    objdata.push(obj);
  }

  // console.log(data);
  // console.log(objdata);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    console.log(value);
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`${value}`}</text>
    );
  };

  return (
    <>
      <p className={styles.meta}>{results.length}개의 영상이 검색되었습니다.</p>
      <p className={styles.meta}>
        그 중 {((videos.length / results.length) * 100).toFixed(0)} % ,{" "}
        {videos.length}개의 영상이 조회수 10만을 기록하였습니다.{" "}
      </p>
      <p className={styles.meta}>
        총 조회수{" "}
        {(
          results.reduce((sum, current) => sum + current.viewCount, 0) / 1000
        ).toFixed(0)}{" "}
        k, 평균 조회수{" "}
        {(
          results.reduce((sum, current) => sum + current.viewCount, 0) /
          results.length /
          1000
        ).toFixed(0)}{" "}
        k
      </p>
      {/* {data.map((count, index) => (
        <span>
          {" "}{count}{" "}
        </span>
      ))} */}
      <div className={styles.searchDiv}>
        <h3>월별 영상 총 조회수</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={objdata}
            margin={{
              top: 10,
              right: 90,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.searchDiv}>
        <h3>월별 평균 조회수/영상 갯수</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={objdata}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="count"
              barSize={30}
              fill="#8884d8"
              // label={renderCustomBarLabel}
            />
            <Bar
              yAxisId="right"
              dataKey="avg"
              barSize={30}
              fill="#82ca9d"
              // label={renderCustomBarLabel}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    // <ul className={styles.videos}>
    //   {props.videos.map((video) => (
    //     <VideoItem key={video.videoId} video={video} />
    //   ))}
    // </ul>
  );
};

export default SearchAnalysis;
