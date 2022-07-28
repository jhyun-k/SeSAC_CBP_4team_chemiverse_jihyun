import React from "react";
import DiagnosisNav from "./DiagnosisNav";
import PresentState from './PresentState';
import { Route, Routes } from 'react-router-dom';
import DiagnosisResult from './DiagnosisResult';
import styles from './css/diagnosis.module.scss'

const Diagnosis = () => {
  return (
    <div className={styles.diagnosis}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>
            진단
          </span>
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
      <DiagnosisNav />
      <Routes>
        <Route path="*" element={<PresentState />} />
        <Route path="present/*" element={<PresentState />} />
        <Route path="result/*" element={<DiagnosisResult/>} />
      </Routes>
    </div>
  );
};

export default Diagnosis;
