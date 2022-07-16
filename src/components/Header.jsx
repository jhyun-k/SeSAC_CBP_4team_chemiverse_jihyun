import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import headerStyle from "./style/header.module.css";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
=======
import "./style/header.css";
import { useNavigate } from 'react-router-dom';
>>>>>>> 2ffca4304b2c36eb37a565fda26f09d368de0bc6



const Header = ({ title,auth,setAuth,setIsOpen}) => {
  const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate('/main/login')
    }
  
<<<<<<< HEAD
   
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
=======
    function openModal() {
      setIsOpen(true);
    }

    
  
   
  return (
    <header className="main-header-box">
      <div className="main-header">
      
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <Nav />
        <div>
          <ul>
          <NavLink to='./mypage'>마이페이지</NavLink>
          <div className='login_btn'>
             {
                auth === true ? 
                <span onClick={()=>setAuth(false)}>
                    로그아웃
                </span> : 
                <span onClick={()=>{goToLogin();openModal()}}>로그인</span>
             }
            </div>
          </ul>
>>>>>>> 2ffca4304b2c36eb37a565fda26f09d368de0bc6
        </div>
      </div>
    </header>
  );
};

export default Header;