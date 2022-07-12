import React from "react";
import styles from"./css/index.module.css"
import Diary from './Diary';


const Journal = () => {
  return (
    <div className={styles.JournalGoal}>
      <h1>성찰저널</h1>
      <h3 className={styles.title}>성찰저널 설명 글</h3>
      <Diary />
    </div>
  );
};

export default Journal;
