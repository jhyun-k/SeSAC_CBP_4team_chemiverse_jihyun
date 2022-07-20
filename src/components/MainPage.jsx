import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Loginok from "./Login/Loginok";
import { useState } from "react";
import mainPageStyle from "./style/mainPage.module.css";

const MainPage = () => {
    const mainList = [
        { content: "Connect With 바로가기", href: "/" },
        { content: "교육장 이동", href: "./move" },
        { content: "교육안내", href: "./guide" },
        { content: "진단", href: "./diagnosis" },
        { content: "역량학습", href: "./learning" },
        { content: "ChemiStory", href: "./chemiStory" },
        { content: "멘토링", href: "./mentoring" },
        { content: "게시판", href: "./post" },
    ];
    return (
        <div className={mainPageStyle.mainPage}>
            <ul>
                {mainList.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={element.href}>{element.content}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MainPage;
