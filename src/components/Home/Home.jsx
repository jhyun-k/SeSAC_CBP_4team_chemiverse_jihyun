import React from "react";
import HomeHeader from "./HomeHeader";
import Welcome from "./Welcome";
import Introduce from "./Introduce";
import Ready from "./Ready";
import { Routes, Route } from "react-router-dom";
import Board from "./../Board/Board";
import HomePage from "../HomePage";

const Home = () => {
    const homeList = [
        { content: "환영인사", href: "welcome" },
        { content: "회사소개", href: "introduce" },
        { content: "입사 전 준비사항", href: "ready" },
        { content: "게시판", href: "/board/notice" },
    ];

    return (
        <div className="home">
            <HomeHeader />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/welcome" element={<Welcome />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/ready" element={<Ready />}></Route>
                <Route path="/board/*" element={<Board />}></Route>
            </Routes>
        </div>
    );
};

export default Home;
