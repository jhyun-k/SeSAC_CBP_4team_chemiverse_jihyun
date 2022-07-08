import React from "react";
import './css/login.css';
import { Routes, Route } from "react-router-dom";
import Loginok from './Loginok';
import { Link } from "react-router-dom";


const Login = () => {

  
  return (
    <div className="login">
       <div className='modal'>
        <container className='loginContainer'>
          <h1 className='logo'>로고</h1>
          <p className='text'>신규입사자웅앵웅 환영해요~!~!</p>
          <div className='inner'>
          <input className='input' id="id" name="id" placeholder="아이디를 입력해주세요" 
          autoComplete='off'/>
          <input
            className='input'
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className='button_box'>
          <button className='loginbtn'>ID/PW찾기</button>
          <button className='loginbtn'>로그인</button>
          </div>
            <span>
              <Link to={'loginok'}>로그인버튼</Link>
            </span>
            <Routes>
              <Route path="login/loginok" element={<Loginok />}></Route>
            </Routes>
            </div>
        </container>
      </div>
    </div>
  );
};

export default Login;

// 로그인 하기 위해 서버가 없          redux 로그인 되었을 때 안되었을ㄸㅐ 지금... 로그인을 그렇구나!!! 그럼 나 ㄴ 뭐해 ㅎㅎㅎㅎㅎㅎ 메인페이지..? 디자인