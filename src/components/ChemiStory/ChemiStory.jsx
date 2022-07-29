import React from "react";
import WriteChemiStory from "./WriteChemiStory";
import Journal from "./Journal";
import Goal from "./Goal";
import ChemiNav from "./ChemiNav";
import { Routes, Route } from "react-router-dom";
import WhatIsChemiStory from "./WhatIsChemiStory";
import styles from "./css/index.module.css";

const ChemiStory = () => {
  return (
    <div className={styles.chemistory}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>Chemi Story</span>
          <span>
            성과높은 HRD부서의 임대형 통합 교육관리 시스템<br></br>
            성과높은 HRD부서의 임대형 통합 교육관리 시스템
          </span>
        </div>
        <img
          className={styles.mainImg}
          src={"/chemiverse_img/img-pop-cardnews.png"}
          alt="img-pop-cardnews"
        />
      </div>
      <ChemiNav />
      <Routes>
        <Route path="/" element={<WhatIsChemiStory />}></Route>
        <Route path="writeChemiStory" element={<WriteChemiStory />}></Route>
        <Route path="journal" element={<Journal />}></Route>
        <Route path="goal" element={<Goal />}></Route>
      </Routes>
    </div>
  );
};

export default ChemiStory;
