import React from "react";
import './css/login.css';
import { Routes, Route } from "react-router-dom";
import Loginok from "./Loginok";
import { Link } from "react-router-dom";
import styles from "./css/login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.modal}>
                <container className={styles.loginContainer}>
                    <h1 className={styles.logo}>로고</h1>
                    <p className={styles.text}>신규입사자웅앵웅 환영해요~!~!</p>
                    <div className={styles.inner}>
                        <input
                            className={styles.input}
                            id="id"
                            name="id"
                            placeholder="아이디를 입력해주세요"
                            autoComplete="off"
                        />
                        <input
                            className={styles.input}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        />
                        <div className={styles.button_box}>
                            <button className={styles.loginbtn}>
                                ID/PW찾기
                            </button>
                            <button className={styles.loginbtn}>로그인</button>
                        </div>
                    </div>
                </container>
            </div>
        </div>
    );
};

export default Login;
