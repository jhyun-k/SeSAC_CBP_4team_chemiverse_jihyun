import React from "react";
import { Route, Routes } from "react-router-dom";
import LearningModule from "./LearningModule";
import LearnNav from "./LearnNav";
import PeopleSkill from "./PeopleSkill";
import SelfManage from "./SelfManage";
import Understand from "./Understand";
import WorkSkill from "./WorkSkill";

const Learning = () => {
    // 테스트용 데이터. 나중에 따로 뺄 것
    const module = [
        {
            understand: [
                {
                    id: 1,
                    name: "회사이해1",
                    goal: "학습목표1",
                    basic: "기본개념1",
                    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 2,
                    name: "회사이해2",
                    goal: "학습목표2",
                    basic: "기본개념2",
                    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 3,
                    name: "회사이해3",
                    goal: "학습목표3",
                    basic: "기본개념3",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                },
            ],
        },
        {
            workskill: [
                {
                    id: 1,
                    name: "워크스킬1",
                    goal: "학습목표1",
                    basic: "기본개념1",
                    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 2,
                    name: "워크스킬2",
                    goal: "학습목표2",
                    basic: "기본개념2",
                    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 3,
                    name: "워크스킬3",
                    goal: "학습목표3",
                    basic: "기본개념3",
                    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
            ],
        },
        {
            peopleskill: [
                {
                    id: 1,
                    name: "피플스킬1",
                    goal: "학습목표1",
                    basic: "기본개념1",
                    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 2,
                    name: "피플스킬2",
                    goal: "학습목표2",
                    basic: "기본개념2",
                    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 3,
                    name: "피플스킬3",
                    goal: "학습목표3",
                    basic: "기본개념3",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                },
            ],
        },
        {
            selfmanage: [
                {
                    id: 1,
                    name: "자기관리1",
                    goal: "학습목표1",
                    basic: "기본개념1",
                    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 2,
                    name: "자기관리2",
                    goal: "학습목표2",
                    basic: "기본개념2",
                    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                },
                {
                    id: 3,
                    name: "자기관리3",
                    goal: "학습목표3",
                    basic: "기본개념3",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                },
            ],
        },
    ];
    console.log(module[3].selfmanage);
    return (
        <div className="learning">
            <LearnNav />
            <h1>역량학습 페이지</h1>
            <Routes>
                <Route
                    path="/"
                    element={<Understand module={module[0].understand} />}
                ></Route>
                <Route
                    path="/:id"
                    element={<LearningModule module={module[0].understand} />}
                ></Route>
                <Route
                    path="workskill"
                    element={<WorkSkill module={module[1].workskill} />}
                ></Route>
                <Route
                    path="/workskill/:id"
                    element={<LearningModule module={module[1].workskill} />}
                ></Route>
                <Route
                    path="peopleskill"
                    element={<PeopleSkill module={module[2].peopleskill} />}
                ></Route>
                <Route
                    path="/peopleskill/:id"
                    element={<LearningModule module={module[2].peopleskill} />}
                ></Route>
                <Route
                    path="selfmanage"
                    element={<SelfManage module={module[3].selfmanage} />}
                ></Route>
                <Route
                    path="/selfmanage/:id"
                    element={<LearningModule module={module[3].selfmanage} />}
                ></Route>
            </Routes>
        </div>
    );
};

export default Learning;
