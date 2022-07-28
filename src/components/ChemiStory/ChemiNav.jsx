import React from "react";
import { NavLink } from "react-router-dom";
import styles from"./css/index.module.css"
import { useState } from "react";

const ChemiNav = () => {
  const chemiNavList = [
    { id:1 , content: "ChemiStory란?", href: "." },
    { id:2 ,content: "ChemiStory 작성", href: "./writeChemiStory" },
    { id:3 ,content: "성찰저널", href: "./journal" },
    { id:4 ,content: "자기개발목표", href: "./goal" },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const handleMenu = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <div className={styles.ChemiNav}>
      <nav className={styles.nav}>
        <ul>
          {chemiNavList.map((element, index) => {
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

export default ChemiNav;
