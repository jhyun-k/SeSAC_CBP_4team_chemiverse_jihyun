import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/index.module.css"
import { useState } from "react";

const MentoringNav = () => {
  const mentorNavList = [
    { id:1, content: "멘토링이란?", href: "." },
    { id:2, content: "계획서 작성", href: "./writePlan" },
    { id:3, content: "활동내역 업로드", href: "./upload" },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const handleMenu = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          {mentorNavList.map((element, index) => {
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

export default MentoringNav;
