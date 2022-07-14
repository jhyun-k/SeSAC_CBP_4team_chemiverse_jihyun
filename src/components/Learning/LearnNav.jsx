import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/learning.module.css";

const LearnNav = () => {
    const navList = [
        { content: "회사이해", href: "." },
        { content: "워크스킬", href: "./workskill" },
        { content: "피플스킬", href: "./peopleskill" },
        { content: "자기관리", href: "./selfmanage" },
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
