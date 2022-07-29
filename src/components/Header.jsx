import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import headerStyle from "./style/header.module.css";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Header = ({ title, auth, setAuth }) => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };

    const navList = [
        { content: "교육장 이동", href: "move" },
        { content: "교육안내", href: "guide" },
        { content: "진단", href: "diagnosis" },
        { content: "역량학습", href: "learning" },
        { content: "ChemiStory", href: "chemiStory" },
        { content: "멘토링", href: "mentoring" },
        { content: "게시판", href: "post/freepost" },
    ];

    const [check, setCheck] = useState();

    return (
        <header className={headerStyle.mainHeaderBox}>
            <div className={headerStyle.inner}>
                <ul className={headerStyle.login}>
                    <NavLink to="./mypage">마이페이지</NavLink>
                    <div className={headerStyle.login_btn}>
                        {auth ? (
                            <span onClick={() => setAuth(false)}>로그아웃</span>
                        ) : (
                            <span onClick={() => goToLogin()}>로그아웃</span>
                        )}
                    </div>
                </ul>
                <div className={`${headerStyle.mainHeader} ${headerStyle.on}`}>
                    <h1>
                        <Link to="/main">{title}</Link>
                    </h1>
                    <Nav />
                    <input
                        type="checkbox"
                        id="menuicon"
                        checked={check}
                        onClick={() => setCheck(true)}
                    />
                    <label htmlFor="menuicon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className={headerStyle.sidebar}>
                        <ul className={headerStyle.side_login}>
                            <NavLink to="./mypage">마이페이지 |</NavLink>
                            <div className={headerStyle.login_btn}>
                                {auth ? (
                                    <span onClick={() => setAuth(false)}>
                                        로그아웃
                                    </span>
                                ) : (
                                    <span onClick={() => goToLogin()}>
                                        로그아웃
                                    </span>
                                )}
                            </div>
                        </ul>
                        {navList.map((element, index) => {
                            return (
                                <li
                                    className={headerStyle.navlist_white}
                                    key={index}
                                >
                                    <Link
                                        to={element.href}
                                        onClick={() => setCheck(false)}
                                    >
                                        {element.content}
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
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
