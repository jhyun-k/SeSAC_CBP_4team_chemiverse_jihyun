import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/HomeHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeHeader = () => {
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
};

export default HomeHeader;
