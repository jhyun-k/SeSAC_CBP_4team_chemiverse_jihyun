import React from "react";
import { NavLink } from "react-router-dom";

const LearnNav = () => {
    const navList = [
        { content: "회사이해", href: "/main/learning/understand" },
        { content: "워크스킬", href: "/main/learning/workskill" },
        { content: "피플스킬", href: "/main/learning/peopleskill" },
        { content: "자기관리", href: "/main/learning/selfmanage" },
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
