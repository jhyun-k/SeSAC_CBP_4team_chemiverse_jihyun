import React from "react";
import styles from"./css/index.module.css"
import Diary from '../Diary/Diary';


const Goal = () => {
  return (
    <div className={styles.JournalGoal}>
      <h1>자기개발목표</h1>
      <h3 className={styles.title}>자기개발목표 설명 글</h3>
      <Diary />
    </div>
  );
};

export default Goal;
