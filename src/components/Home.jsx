import React from "react";
import HomeHeader from "./HomeHeader";
import Welcome from "./Welcome";
// import Introduce from "./Introduce";
// import Ready from "./Ready";
// import HomeNotice from "./HomeNotice";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    const homeList = [
        { content: "환영인사", href: "welcome" },
        { content: "회사소개", href: "introduce" },
        { content: "입사 전 준비사항", href: "ready" },
        { content: "게시판", href: "homenotice" },
    ];

    return (
        <div className="home">
            <HomeHeader />
            <ul>
                {homeList.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={element.href}>{element.content}</Link>
                        </li>
                    );
                })}
            </ul>
            <Routes>
                <Route path="welcome" element={<Welcome />}></Route>
                {/* <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/ready" element={<Ready />}></Route>
                <Route path="/homenotice" element={<HomeNotice />}></Route> */}
            </Routes>
        </div>
    );
};

export default Home;
