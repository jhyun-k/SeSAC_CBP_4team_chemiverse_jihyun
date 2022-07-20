import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiagnosisNav from './DiagnosisNav';
import PresentState from './PresentState';
import DiagnosisResult from './DiagnosisResult';
import styles from "./css/diagnosis.module.css"

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
      {/* 교육장 이동 이미지 변경 */}
    </div>
      <DiagnosisNav/>
      <Routes>
      <Route path="/" element={<PresentState />}></Route>
      <Route path="result" element={<DiagnosisResult />}></Route>
      </Routes>    
    </div>
  );
};

export default Diagnosis;