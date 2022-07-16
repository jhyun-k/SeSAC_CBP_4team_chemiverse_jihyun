import React from "react";
import { Link } from "react-router-dom";
import styles from './css/HomeHeader.module.css' 

const HomeHeader = () => {
  



  const homeList = [
    { content: "환영인사", href: "welcome" },
    { content: "회사소개", href: "introduce" },
    { content: "입사 전 준비사항", href: "ready" },
    { content: "게시판", href: "homenotice" },
  ]
  return (
    <header className={styles.homeHeader}>
        <div className={styles.homeContainer}>
              <Link to="/" className={styles.blacklogo}>expert</Link>
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
<<<<<<< HEAD:src/components/Home/HomeHeader.jsx
              <Link to="/main/login" >Chemiverse On & Up</Link>
=======
              <Link to="/main" >Chemiverse On & Up 바로가기</Link>
>>>>>>> 2ffca4304b2c36eb37a565fda26f09d368de0bc6:src/components/HomeHeader.jsx
            </button>
        </div>
    </header>
  );
};

export default HomeHeader;