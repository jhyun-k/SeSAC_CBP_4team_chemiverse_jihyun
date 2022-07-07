import React from "react";
import { Route, Routes } from "react-router-dom";
import LearningModule from "./LearningModule";
import LearnNav from "./LearnNav";
import PeopleSkill from "./PeopleSkill";
import SelfManage from "./SelfManage";
import Understand from "./Understand";
import WorkSkill from "./WorkSkill";

const Learning = () => {
    const module = [
        {
            id: 1,
            name: "모듈명1",
            goal: "학습목표1",
            basic: "기본개념1",
            img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            name: "모듈명2",
            goal: "학습목표2",
            basic: "기본개념2",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 3,
            name: "모듈명3",
            goal: "학습목표3",
            basic: "기본개념3",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        // { id: 4, name: "모듈명3", goal: "학습목표3", basic: "기본개념3" },
    ];
    return (
        <div className="learning">
            <LearnNav />
            <h1>역량학습 페이지</h1>
            <Routes>
                <Route
                    path="/"
                    element={<Understand module={module} />}
                ></Route>
                <Route
                    path="/:id"
                    element={<LearningModule module={module} />}
                ></Route>
                <Route path="workskill" element={<WorkSkill />}></Route>
                <Route path="peopleskill" element={<PeopleSkill />}></Route>
                <Route path="selfmanage" element={<SelfManage />}></Route>
            </Routes>
        </div>
    );
};

export default Learning;
