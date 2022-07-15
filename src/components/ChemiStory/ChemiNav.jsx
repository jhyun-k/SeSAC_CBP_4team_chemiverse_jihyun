import React from "react";
import { NavLink } from "react-router-dom";
import styles from"./css/index.module.css"

const ChemiNav = () => {
  const chemiNavList = [
    { content: "ChemiStory란?", href: "." },
    { content: "ChemiStory 작성", href: "./writeChemiStory" },
    { content: "성찰저널", href: "./journal" },
    { content: "자기개발목표", href: "./goal" },
  ];
  return (
    <div className={styles.ChemiNav}>
      <nav className={styles.nav}>
        <ul>
          {chemiNavList.map((element, index) => {
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

export default ChemiNav;
