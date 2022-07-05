import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navList = [
    { content: "교육장 이동", href: "./move" },
    { content: "교육안내", href: "./guide" },
    { content: "진단", href: "./diagnosis" },
    { content: "역량학습", href: "./learning" },
    { content: "ChemiStory", href: "./story" },
    { content: "멘토링", href: "./mento" },
    { content: "게시판", href: "./post" },
    { content: "마이페이지", href: "./mypage" },
    { content: "로그인", href: "./login" },
  ];
  return (
    <nav className="nav">
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

export default Nav;
