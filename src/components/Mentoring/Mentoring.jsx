import React from "react";
import MentoringNav from "./MentoringNav";
import { Routes, Route } from "react-router-dom";
import WhatIsMentoring from "./WhatIsMentoring";
import WritePlan from "./WritePlan";
import Upload from "./Upload";
import styles from "./css/index.module.css";

const Mentoring = () => {
  return (
    <div className={styles.Mentoring}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>멘토링</span>
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
      <MentoringNav />
      <Routes>
        <Route path="/" element={<WhatIsMentoring />}></Route>
        <Route path="writePlan" element={<WritePlan />}></Route>
        <Route path="upload" element={<Upload />}></Route>
      </Routes>
    </div>
  );
};

export default Mentoring;
