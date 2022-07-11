import React from "react";
import styles from"./css/index.module.css"

const WhatIsChemiStory = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <div>
        <h1 className={styles.title}>Chemi Story란?</h1>
        <div className={styles.subTitle}>
          <img
            className={styles.chemiImg}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <h2>목적</h2>
          <div>콘텐츠 기획 후 삽입 예정</div>
        </div>
        <div className={styles.subTitle}>
          <img
            className={styles.chemiImg}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <h2>사용방법</h2>
          <div className={styles.content}>콘텐츠 기획 후 삽입 예정</div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsChemiStory;
