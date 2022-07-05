import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navList = [
    { content: "교육장 이동", href: "main/move" },
    { content: "교육안내", href: "main/guide" },
    { content: "진단", href: "main/diagnosis" },
    { content: "역량학습", href: "main/learning" },
    { content: "ChemiStory", href: "main/chemiStory" },
    { content: "멘토링", href: "main/mento" },
    { content: "게시판", href: "main/post" },
    { content: "마이페이지", href: "main/mypage" },
    { content: "로그인", href: "main/login" },
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
