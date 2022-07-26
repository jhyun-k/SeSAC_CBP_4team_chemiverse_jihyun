import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import headerStyle from "./style/header.module.css";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";



const Header = ({ title,auth,setAuth,setIsOpen}) => {

  const navigate = useNavigate();

    console.log(auth);
    
    const goToLogin = ()=>{
        navigate('/login')
    }
    const navList = [
      { content: '교육장 이동', href: 'move' },
      { content: '교육안내', href: 'guide' },
      { content: '진단', href: 'diagnosis' },
      { content: '역량학습', href: 'learning' },
      { content: 'ChemiStory', href: 'chemiStory' },
      { content: '멘토링', href: 'mentoring' },
      { content: '게시판', href: 'post/freepost' },
    ];
  return (
    <header className={headerStyle.mainHeaderBox}>
      <div className={headerStyle.inner}>
        <ul className={headerStyle.login}>
        <NavLink to='./mypage'>마이페이지</NavLink>
          <div className='login_btn'>
             {
                auth ? 
                <span onClick={()=>setAuth(false)}>
                    로그아웃  
                </span> : 
                <span onClick={()=>goToLogin()}>로그아웃</span>
             }
            </div>
        </ul>
        <div className={headerStyle.mainHeader}>
          <h1>
            <Link to="/main">{title}</Link>
          </h1>
          <Nav />
          <div className={headerStyle.mobile_right}>
          <FiSearch className={headerStyle.searchIcon}/>
          <input type="checkbox" id='menuicon' checked='' />
                <label htmlFor="menuicon">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
                <div className={headerStyle.sidebar}>
                {navList.map((element, index) => {
                return (
                  <li className={headerStyle.navlist_white} key={index}>
                    <Link to={element.href}>{element.content}</Link>
                  </li>
                );
              })}
                </div>
              </div>
          <form className={headerStyle.searchBox}>
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>
              <FiSearch  />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;