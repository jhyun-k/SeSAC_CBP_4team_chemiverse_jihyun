import React from "react";
import { NavLink } from "react-router-dom";

const MentoringNav = () => {
  const mentorNavList = [
    { content: "멘토링이란?", href: "." },
    { content: "계획서 작성", href: "./writePlan" },
    { content: "활동내역 업로드", href: "./upload" },
  ];
  return (
    <div>
      <nav className="nav">
        <ul>
          {mentorNavList.map((element, index) => {
            return (
              <li key={index}>
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MentoringNav;
