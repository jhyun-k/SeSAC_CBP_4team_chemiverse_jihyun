import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../ChemiStory/css/index.module.css";
import guideStyle from "./css/guideStyle.module.css";

const GuideNav = () => {
  const navList = [
    { content: "공지사항", href: "." },
    { content: "시간표", href: "./timetable" },
    { content: "강사소개", href: "./teacher" },
  ];
  return (
    <div className={styles.ChemiNav}>
      <nav className={guideStyle.nav}>
        <ul>
          {navList.map((element, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={element.href}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navbtn} ${styles.on}`
                      : `${styles.navbtn}`
                  }
                >
                  {element.content}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default GuideNav;
