import React from "react";
import { Route, Routes } from "react-router-dom";
import LearnNav from "./LearnNav";
import PeopleSkill from "./PeopleSkill";
import SelfManage from "./SelfManage";
import Understand from "./Understand";
import WorkSkill from "./WorkSkill";

const Learning = () => {
    return (
        <div className="learning">
            <LearnNav />
            <h1>역량학습 페이지</h1>
            <Routes>
                <Route path="/" element={<Understand />}></Route>
                <Route path="workskill" element={<WorkSkill />}></Route>
                <Route path="peopleskill" element={<PeopleSkill />}></Route>
                <Route path="selfmanage" element={<SelfManage />}></Route>
            </Routes>
        </div>
    );
};

export default Learning;
