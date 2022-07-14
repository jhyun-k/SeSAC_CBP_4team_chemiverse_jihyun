import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import headerStyle from "./style/header.module.css";
import { FiSearch } from "react-icons/fi";


const Header = ({ title }) => {
  const headerList = [
    { content: "로그인", href: "./login" },
    { content: "마이페이지", href: "./mypage" },
  ];
  return (
    <header className={headerStyle.mainHeaderBox}>
      <div className={headerStyle.inner}>
        <ul className={headerStyle.login}>
          {headerList.map((element, index) => {
            return (
              <li key={index}>
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className={headerStyle.mainHeader}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <Nav />
          <form className={headerStyle.searchBox}>
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>
              <FiSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
