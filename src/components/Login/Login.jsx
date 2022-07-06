import React from "react";


const Login = () => {
  return (
    <div className="login">
      <container>
      <input id="id" name="id" placeholder="아이디를 입력해주세요" />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button>로그인</button>
    </container>
    </div>
  );
};

export default Login;
