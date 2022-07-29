import React from "react";
import styles from "./css/index.module.css";
import Diary from "../Diary/Diary";
import { BsCheckLg } from "react-icons/bs";

const Goal = () => {
  return (
    <div className={styles.JournalGoal}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>자기개발목표</h1>
      <h3 className={styles.subTitle}>
        역량진단 결과 기반의 자기개발 계획(IDP)뿐 아니라, <br />
        내부 필수교육정보, 추천교육정보, 외부 타기관 교육까지 계획을 세울 수
        있는 탁월한 자기개발 계획 설정
      </h3>
      <Diary />
    </div>
  );
};

export default Goal;
