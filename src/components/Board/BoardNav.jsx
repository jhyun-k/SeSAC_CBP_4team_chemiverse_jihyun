import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/BoardNav.module.css';

const BoardNav = () => {
  const navList = [
    { id: 1, content: '공지사항', href: './notice' },
    { id: 2, content: '자기소개', href: './introduce' },
    { id: 3, content: 'QnA', href: './qna' },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const handleMenu = (idx) => {
    setCurrentTab(idx);
  };
  return (
    <div className={styles.ChemiNav}>
      <nav className={styles.nav}>
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
                type='button'
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

export default BoardNav;
