import React from "react";
import { Routes, Route } from "react-router-dom";
import TimeTable from "./TimeTable";
import Teacher from "./Teacher";
import GuideNav from "./GuideNav";
import Notice from "./Notice";
import styles from "../ChemiStory/css/index.module.css";

const Guide = () => {
  return (
    <div className={styles.chemistory}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>교육안내</span>
          <span>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글<br></br>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
          </span>
        </div>
        <img
          className={styles.mainImg}
          src={"/chemiverse_img/img-pop-cardnews.png"}
          alt="img-pop-cardnews"
        />
      </div>
      <GuideNav />
      <Routes>
        <Route path="/" element={<Notice />}></Route>
        <Route path="timetable" element={<TimeTable />}></Route>
        <Route path="teacher/*" element={<Teacher />}></Route>
      </Routes>
    </div>
  );
};

export default Guide;
