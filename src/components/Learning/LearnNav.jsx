import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/learning.module.css";

const LearnNav = () => {
    const navList = [
        { id: 1, content: "회사이해", href: "." },
        { id: 2, content: "워크스킬", href: "./workskill" },
        { id: 3, content: "피플스킬", href: "./peopleskill" },
        { id: 4, content: "자기관리", href: "./selfmanage" },
    ];

    return (
        <nav className={styles.learnNav}>
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
    );
};

export default LearnNav;
