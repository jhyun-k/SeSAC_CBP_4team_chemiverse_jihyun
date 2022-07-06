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
                <Route
                    path="/learning/understand"
                    element={<Understand />}
                ></Route>
                <Route
                    path="/learning/workskill"
                    element={<WorkSkill />}
                ></Route>
                <Route
                    path="/learning/peopleskill"
                    element={<PeopleSkill />}
                ></Route>
                <Route
                    path="/learning/selfmanage"
                    element={<SelfManage />}
                ></Route>
            </Routes>
        </div>
    );
};

export default Learning;
