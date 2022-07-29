import React from "react";
import styles from "./css/index.module.css";
import Diary from "../Diary/Diary";
import { BsCheckLg } from "react-icons/bs";

const Journal = () => {
  return (
    <div className={styles.JournalGoal}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>성찰저널</h1>
      <h3 className={styles.subTitle}>
        이번 학습을 통해 무엇을 배웠는지, 앞으로 더 배우고싶은것은 뭔지
        작성해주세요.
      </h3>
      <Diary />
    </div>
  );
};

export default Journal;
