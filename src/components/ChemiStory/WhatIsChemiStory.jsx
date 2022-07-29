import React from "react";
import styles from "./css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import pData from "../../data/peopleskillData.json";

const WhatIsChemiStory = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <div>
        <p className={styles.pin}>
          <BsCheckLg />
        </p>
        <h1 className={styles.title}>Chemi Story란?</h1>
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
        <ul className={styles.moduleList}>
          {/* 모듈 목록  */}
          {pData.map(ele => {
            return (
              <li className={styles.moduleListItem} key={ele.id}>
                <div className={styles.imgBox}>
                  <img src={ele.img} alt="" />
                  <div className={styles.hover}>{ele.goal}</div>
                </div>
                <p className={styles.moduleName}>{ele.name}</p>
                <p className={styles.moduleEngName}>{ele.engName}</p>
              </li>
            );
          })}
        </ul>
        {/* <div class={styles.modulePurpose}>
          <p class={styles.purpose}>
            <MdArrowForwardIos color="#6f76c1" /> 집합교육, 이러닝, 독서, 설문,
            평가, 역량진단 등 교육에 필요한 모든 기능을 통합하는 시스템
          </p>
          <p class={styles.purpose}>
            <MdArrowForwardIos color="#6f76c1" /> 교육 담당자의 변경에 따라 생길
            수 있는 HRD업무의 혼란을 최소화
          </p>
          <p class={styles.purpose}>
            <MdArrowForwardIos color="#6f76c1" /> 교육 담당자의 운영 관리 고민
            끝! 시간은 절반, 효과는 두배
          </p>
        </div> */}
        <div className={styles.subTitle}>
          <img
            className={styles.img}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <div className={styles.module}>
            <h1>사용방법</h1>
          </div>
        </div>
        <div className={styles.content}>
          콘텐츠 기획 후 삽입 예정콘텐츠 기획 후 삽입 예정콘텐츠 기획 후 삽입
          예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후
          삽입 예정 콘텐츠<br></br>콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입
          예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후 삽입 예정 콘텐츠 기획 후
          삽입 예정{" "}
        </div>
      </div>
    </div>
  );
};

export default WhatIsChemiStory;
