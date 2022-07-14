import React from "react";
import { NavLink } from "react-router-dom";
import navStyle from "./style/nav.module.css";

const Nav = () => {
  
  
  const navList = [
    { content: "교육장 이동", href: "./move" },
    { content: "교육안내", href: "./guide" },
    { content: "진단", href: "./diagnosis" },
    { content: "역량학습", href: "./learning" },
    { content: "ChemiStory", href: "./chemiStory" },
    { content: "멘토링", href: "./mentoring" },
    { content: "게시판", href: "./post" },
  ];
  const guideDetail = [
    { content: "공지사항", href: "./guide" },
    { content: "시간표", href: "./guide/timetable" },
    { content: "강사소개", href: "./guide/teacher" },
  ];
  const diagDetail = [
    { content: "현재상태점검", href: "./diagnosis" },
    { content: "진단결과보기", href: "./diagnosis/result" },
  ];
  const learningDetail = [
    { content: "회사이해", href: "./learning" },
    { content: "워크스킬", href: "./learning/workskill" },
    { content: "피플스킬", href: "./learning/peopleskill" },
    { content: "자기관리", href: "./learning/selfmanage" },
  ];
  const chemiDetail = [
    { content: "ChemiStory란?", href: "./chemiStory" },
    { content: "ChemiStory 작성", href: "./chemiStory/writeChemiStory" },
    { content: "성찰저널", href: "./chemiStory/journal" },
    { content: "자기개발목표", href: "./chemiStory/goal" },
  ];
  const mentorDetail = [
    { content: "멘토링이란?", href: "./mentoring" },
    { content: "계획서 작성", href: "./mentoring/writePlan" },
    { content: "활동내역", href: "./mentoring/upload" },
  ];
  const postDetail = [
    { content: "자유게시판", href: "./post" },
    { content: "아이디어제시", href: "./post/suggestIdea" },
  ];
  const tabmenu = document.querySelectorAll(".nav ul");
  const fncHover = () => {
    tabmenu.style.display = "block";
  };
  return (
    <nav className={navStyle.navBox} onMouseOver={fncHover}>
      <ul className={navStyle.nav}>
        {navList.map((element, index) => {
          return (
            <li key={index}>
              <NavLink to={element.href}>{element.content}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className={navStyle.tabmenuBox}>
        <div className={navStyle.tabmenu}>
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
            {diagDetail.map((element, index) => {
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
            {chemiDetail.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href}>{element.content}</NavLink>
                </li>
              );
            })}
          </ul>
          <ul>
            {mentorDetail.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href}>{element.content}</NavLink>
                </li>
              );
            })}
          </ul>
          <ul>
            {postDetail.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href}>{element.content}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
