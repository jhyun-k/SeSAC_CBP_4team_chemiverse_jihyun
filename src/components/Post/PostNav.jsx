import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/PostNav.module.css';

const PostNav = () => {
  const navList = [
    { id: 1, content: '자유게시판', href: './freepost' },
    { id: 2, content: '아이디어 제시', href: './suggestIdea' },
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

export default PostNav;
