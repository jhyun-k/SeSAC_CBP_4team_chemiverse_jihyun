import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import headerStyle from "./style/header.module.css";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";



const Header = ({ title,auth,setAuth,setIsOpen}) => {
  const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate('/main/login')
    }
  
   
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
                <span onClick={()=>goToLogin()}>로그인</span>
             }
            </div>
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