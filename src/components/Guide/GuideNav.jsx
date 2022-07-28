import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../ChemiStory/css/index.module.css";
import guideStyle from "./css/guideStyle.module.css";
import { useState } from "react";

const GuideNav = () => {
  const navList = [
    { id: 1, content: "공지사항", href: "." },
    { id: 2, content: "시간표", href: "./timetable" },
    { id: 3, content: "강사소개", href: "./teacher" },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const handleMenu = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <div className={styles.ChemiNav}>
      <nav className={`${styles.nav} ${guideStyle.nav}`}>
        <ul>
          {navList.map((element, index) => {
            return (
              <li
                key={element.id}
                className={
                  currentTab === index
                    ? `${styles.navbtn} ${styles.on}`
                    : `${styles.navbtn}`
                }
                onClick={() => handleMenu(index)}
                type="button"
              >
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default GuideNav;
