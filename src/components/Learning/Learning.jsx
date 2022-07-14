import React from "react";
import { Route, Routes } from "react-router-dom";
import LearningModule from "./LearningModule";
import LearnNav from "./LearnNav";
import PeopleSkill from "./PeopleSkill";
import SelfManage from "./SelfManage";
import Understand from "./Understand";
import WorkSkill from "./WorkSkill";
import styles from "./css/learning.module.css";
import uData from "../../data/understandData.json";
import wData from "../../data/workskillData.json";
import pData from "../../data/peopleskillData.json";
import sData from "../../data/selfmanageData.json";

const Learning = () => {
    return (
        <div className="learningWrapper">
            <LearnNav />
            <h1>역량학습 페이지</h1>
            <Routes>
                <Route path="/" element={<Understand module={uData} />}></Route>
                <Route
                    path="/:id"
                    element={<LearningModule module={uData} />}
                ></Route>
                <Route
                    path="workskill"
                    element={<WorkSkill module={wData} />}
                ></Route>
                <Route
                    path="/workskill/:id"
                    element={<LearningModule module={wData} />}
                ></Route>
                <Route
                    path="peopleskill"
                    element={<PeopleSkill module={pData} />}
                ></Route>
                <Route
                    path="/peopleskill/:id"
                    element={<LearningModule module={pData} />}
                ></Route>
                <Route
                    path="selfmanage"
                    element={<SelfManage module={sData} />}
                ></Route>
                <Route
                    path="/selfmanage/:id"
                    element={<LearningModule module={sData} />}
                ></Route>
            </Routes>
        </div>
    );
};

export default Learning;
