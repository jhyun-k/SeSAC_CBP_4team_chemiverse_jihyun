import React from "react";
import { NavLink } from "react-router-dom";

const LearnNav = () => {
    const navList = [
        { content: "회사이해", href: "." },
        { content: "워크스킬", href: "./workskill" },
        { content: "피플스킬", href: "./peopleskill" },
        { content: "자기관리", href: "./selfmanage" },
    ];
    return (
        <nav className="learnNav">
            <ul>
                {navList.map((element, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={element.href}>
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
