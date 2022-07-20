import React from "react";
import styles from "./css/index.module.css";
import { BsCheckLg } from "react-icons/bs";

const WhatIsMentoring = () => {
  return (
    <div className={styles.WhatIsMentoring}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>멘토링이란?</h1>
      <div className={styles.subTitle}>
        <img
          className={styles.img}
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        <div className={styles.module}>
          <h1>목적</h1>
        </div>
      </div>
      <div className={styles.content}>
        콘텐츠 기획 후 삽입 예정콘텐츠 기획 후 삽입 예정콘텐츠 기획 후 삽입 예정
        콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입
        예정 콘텐츠<br></br>콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입 예정
        콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입
        예정{" "}
      </div>
    </div>
  );
};

export default WhatIsMentoring;
