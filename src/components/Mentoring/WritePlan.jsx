import React from "react";
import styles from "./css/index.module.css";
import Diary from "../Diary/Diary";
import { BsCheckLg } from "react-icons/bs";

const WritePlan = () => {
  return (
    <div className={styles.WritePlan}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>계획서 작성</h1>
      <h3 className={styles.subTitle}>
        멘토링 계획을 작성해주세요. 멘토링 계획을 작성해주세요.
      </h3>
      <Diary />
    </div>
  );
};

export default WritePlan;
