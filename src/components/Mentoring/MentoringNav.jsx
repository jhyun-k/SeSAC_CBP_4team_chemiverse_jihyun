import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/index.module.css"


const MentoringNav = () => {
  const mentorNavList = [
    { content: "멘토링이란?", href: "." },
    { content: "계획서 작성", href: "./writePlan" },
    { content: "활동내역 업로드", href: "./upload" },
  ];
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          {mentorNavList.map((element, index) => {
            return (
              <li key={index}>
                <NavLink 
                to={element.href}
                className={({ isActive }) =>
                  isActive ? `${styles.navbtn} ${styles.on}` : `${styles.navbtn}`
                }
                >{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MentoringNav;
