import React from "react";
import HomeHeader from "./HomeHeader";
import Welcome from "./Welcome";
// import Introduce from "./Introduce";
// import Ready from "./Ready";
// import HomeNotice from "./HomeNotice";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <Link to="welcome">환영인사</Link>
            <Link to="introduce">회사소개</Link>
            <Link to="ready">입사 전 준비사항</Link>
            <Link to="homenotice">게시판</Link>

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
