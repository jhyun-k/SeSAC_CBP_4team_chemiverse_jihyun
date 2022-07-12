import React from "react";
import styles from "./css/index.module.css"
import Diary from '../ChemiStory/Diary';

const WritePlan = () => {
  return (
    <div className={styles.WritePlan}>
      <h2 className={styles.title}>계획서 작성</h2>
      <h3>계획서 작성 설명 글</h3>
      <Diary />
    </div>
  );
};

export default WritePlan;
