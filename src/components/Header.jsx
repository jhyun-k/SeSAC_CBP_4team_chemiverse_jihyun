import React from "react";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";
import "./style/header.module.css";
import { useNavigate } from 'react-router-dom';



const Header = ({ title,auth,setAuth,setIsOpen}) => {
  const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate('/main/login')
    }
  
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
        </div>
      </div>
    </header>
  );
};

export default Header;