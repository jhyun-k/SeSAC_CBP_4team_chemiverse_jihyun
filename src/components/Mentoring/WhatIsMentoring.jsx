import React from "react";
import styles from "./css/index.module.css"

const WhatIsMentoring = () => {
  return (
    <div className={styles.WhatIsMentoring}>
      <h1 className={styles.title}>멘토링이란?</h1>
      <div className={styles.subTitle}>
        <img
          className={styles.chemiImg}
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        <h2>목적</h2>
        <div>콘텐츠 기획 후 삽입 예정</div>
      </div>
    </div>
  );
};

export default WhatIsMentoring;
