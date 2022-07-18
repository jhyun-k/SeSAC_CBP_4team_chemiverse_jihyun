import React from "react";
import Diary from "../Diary/Diary";
import styles from "./css/index.module.css";
import { BsCheckLg } from "react-icons/bs";

const WriteChemiStory = () => {
  return (
    <div className={styles.WriteChemiStory}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>ChemiStory 작성</h1>
      <div className={styles.subTitle}>
        <div className={styles.module}>
          <img
            className={styles.img}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <h1>모듈명/활동명</h1>
        </div>
        <h2>작성 설명 글</h2>
        <Diary />
      </div>
    </div>
  );
};

export default WriteChemiStory;
