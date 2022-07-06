import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navList = [
    { content: "교육장 이동", href: "./move" },
    { content: "교육안내", href: "./guide" },
    { content: "진단", href: "./diagnosis" },
    { content: "역량학습", href: "./learning" },
    { content: "ChemiStory", href: "./chemiStory" },
    { content: "멘토링", href: "./mento" },
    { content: "게시판", href: "./post" },
    { content: "마이페이지", href: "./mypage" },
    { content: "로그인", href: "./login" },
  ];
  const guideDetail = [
    { content: "공지사항", href: "./guide" },
    { content: "시간표", href: "./guide/timetable" },
    { content: "강사소개", href: "./guide/teacher" },
  ];
  const learningDetail = [
    { content: "회사이해", href: "./learning" },
    { content: "워크스킬", href: "./learning/workskill" },
    { content: "피플스킬", href: "./learning/peopleskill" },
    { content: "자기관리", href: "./learning/selfmanage" },
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
      <div className="tabmenu">
        <ul>
          {guideDetail.map((element, index) => {
            return (
              <li key={index}>
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul>
          {learningDetail.map((element, index) => {
            return (
              <li key={index}>
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
