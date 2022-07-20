import React from "react";
import styles from "./css/index.module.css"
import Diary from '../Diary/Diary';
import { BsCheckLg } from "react-icons/bs";

const WritePlan = () => {
  return (
    <div className={styles.WritePlan}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>계획서 작성</h1>
      <h3 className={styles.subTitle}>성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글<br></br>성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글</h3>
      <Diary />
    </div>
  );
};

export default WritePlan;
