import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import "./style/header.css";

const Header = ({ title }) => {
  const headerList = [
    { content: "마이페이지", href: "./mypage" },
    { content: "로그인", href: "./login" },
  ];
  return (
    <header className="main-header-box">
      <div className="main-header">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <Nav />
        <div>
          <ul>
            {headerList.map((element, index) => {
              return (
                <li key={index}>
                  <NavLink to={element.href}>{element.content}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
