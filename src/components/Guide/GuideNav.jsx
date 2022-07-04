import React from "react";
import { NavLink } from "react-router-dom";

const GuideNav = () => {
  const navList = [
    { content: "공지사항", href: "/main/guide" },
    { content: "시간표", href: "/main/guide/timetable" },
    { content: "강사소개", href: "/main/guide/teacher" },
  ];
  return (
    <nav className="guideNav">
      <ul>
        {navList.map((element, index) => {
          return (
            <li key={index}>
              <NavLink to={element.href}>{element.content}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GuideNav;
