import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import styles from "../Home/css/HomeHeader.module.css";

const HomeHeader = () => {
  const homeList = [
    { content: "환영인사", href: "welcome" },
    { content: "회사소개", href: "introduce" },
    { content: "입사 전 준비사항", href: "ready" },
    { content: "게시판", href: "homenotice" },
  ];
  return (
    <header className={styles.homeHeader}>
      <div className={styles.homeContainer}>
        <div className={styles.blacklogo}>
          <Link to="/"></Link>
        </div>
        <div className={styles.title}>Chemiverse Connect With</div>
        <ul className="homeNav">
          {homeList.map((element, index) => {
            return (
              <li key={index}>
                <Link to={element.href}>{element.content}</Link>
              </li>
            );
          })}
        </ul>
        <button className={styles.onup_btn}>
          <Link to="/main">Chemiverse On & Up 바로가기</Link>
        </button>
      </div>
    </header>
  );
=======
import styles from "./css/HomeHeader.module.css";

const HomeHeader = () => {
    const homeList = [
        { content: "환영인사", href: "welcome" },
        { content: "회사소개", href: "introduce" },
        { content: "입사 전 준비사항", href: "ready" },
        { content: "게시판", href: "board/notice" },
    ];
    return (
        <header className={styles.homeHeader}>
            <div className={styles.homeContainer}>
                <Link to="/" className={styles.blacklogo}>
                    expert
                </Link>
                <div className={styles.title}>Chemiverse Connect With</div>
                {/* <ul className={styles.homeNav}>
              {homeList.map((element, index) => {
                return (
                  <li className={styles.navlist} key={index}>
                    <Link to={element.href}>{element.content}</Link>
                  </li>
                );
              })}
            </ul> */}
                <button className={styles.onup_btn}>
                    <Link to="/login">Chemiverse On & Up</Link>
                </button>
            </div>
        </header>
    );
>>>>>>> develop
};

export default HomeHeader;
