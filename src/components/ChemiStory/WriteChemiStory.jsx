import React from "react";
import styles from "./css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import Diary from "./WriteChemiDiary/Diary";

const WriteChemiStory = () => {
  const doPrint = (e) => {
    e.preventDefault();
    window.print();
  };
  return (
    <div className={styles.WriteChemiStory}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>ChemiStory 작성</h1>
      <div className={styles.subFlex}>
        <div className={styles.subTitle}>
          <img
            className={styles.img}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <div className={styles.modulePrint}>
            <div className={styles.module}>
              <h1>성장 로드맵 그리기</h1>
              <h2>더 멋진 미래를 준비하기 위한 성장 로드맵</h2>
            </div>
          </div>
        </div>
        <button className={styles.printBtn} onClick={doPrint}>
            인쇄하기
        </button>
      </div>
      <div>
        <div className={styles.roadMap}>
          <span className={styles.year}>5년 이내</span>
          <span className={styles.yearContent}>
            어떻게 해야 탁월한 성과를 내며 조직과 사회에 공헌할 수 있을까?
          </span>
        </div>
        <Diary />
      </div>
      <div>
        <div className={styles.roadMap}>
          <span className={styles.year}>3년 이내</span>
          <span className={styles.yearContent}>
            어떻게 해야 역량을 기르고 성과를 내며 성장할 수 있을까?
          </span>
        </div>
        <Diary />
      </div>
      <div>
        <div className={styles.roadMap}>
          <span className={styles.year}>1년 이내</span>
          <span className={styles.yearContent}>
            어떻게 해야 성공적으로 뿌리를 내릴 수 있을까?
          </span>
        </div>
        <Diary />
      </div>
    </div>
  );
};

export default WriteChemiStory;
