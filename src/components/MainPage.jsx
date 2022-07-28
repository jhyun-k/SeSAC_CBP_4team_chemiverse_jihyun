import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Loginok from "./Login/Loginok";
import { useState } from "react";
import styles from "./style/mainPage.module.css";
import { IoIosArrowForward } from "react-icons/io";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.hoverBox}>
        <div className={`${styles.box1} ${styles.box}`}>
          <div className={`${styles.connectWith} ${styles.common}`}>
            <Link to="/">
              <p>Connect With 바로가기 설명글입니다.</p>
              <span>Connect With 바로가기</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box2} ${styles.box}`}>
          <div className={`${styles.move} ${styles.common}`}>
            <Link to="./move">
              <p>교육장 이동 설명글입니다.</p>
              <span>교육장 이동</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box3} ${styles.box}`}>
          <div className={`${styles.guide} ${styles.common}`}>
            <Link to="./guide">
              <p>교육 안내 설명글입니다.</p>
              <span>교육 안내</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box4} ${styles.box}`}>
          <div className={`${styles.learning} ${styles.common}`}>
            <Link to="./learning">
              <p>역량 학습 설명글입니다.</p>
              <span>역량 학습</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box5} ${styles.box}`}>
          <div className={`${styles.chemiStory} ${styles.common}`}>
            <Link to="./chemiStory">
              <p>Chemi Story 설명글입니다.</p>
              <span>Chemi Story</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box6} ${styles.box}`}>
          <div className={`${styles.post} ${styles.common}`}>
            <Link to="./post">
              <p>궁금한 점을 물어보세요.</p>
              <span>게시판</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box7} ${styles.box}`}>
          <div className={`${styles.mentoring} ${styles.common}`}>
            <Link to="./mentoring">
              <p>멘토링 설명글입니다.</p>
              <span>멘토링</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={`${styles.box8} ${styles.box}`}>
          <div className={`${styles.diagnosis} ${styles.common}`}>
            <Link to="./diagnosis">
              <p>진단 설명글입니다.</p>
              <span>진단</span>
              <IoIosArrowForward className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
      <img
        className={styles.img1}
        src={"/chemiverse_img/img-main-cloud03.png"}
        alt="img-main-cloud03"
      />
      <img
        className={styles.img2}
        src={"/chemiverse_img/img-main-cloud03.png"}
        alt="img-main-cloud03"
      />
      <img
        className={styles.img3}
        src={"/chemiverse_img/img-main-cloud03.png"}
        alt="img-main-cloud03"
      />
    </div>
  );
};

export default MainPage;
