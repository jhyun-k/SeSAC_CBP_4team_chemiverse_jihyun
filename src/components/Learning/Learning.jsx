import React from "react";
import { Route, Routes } from "react-router-dom";
import LearningModule from "./LearningModule";
import LearnNav from "./LearnNav";
import ModuleListPage from "./ModuleListPage";
import styles from "./css/learning.module.css";
import uData from "../../data/understandData.json";
import wData from "../../data/workskillData.json";
import pData from "../../data/peopleskillData.json";
import sData from "../../data/selfmanageData.json";

const Learning = () => {
    return (
        <div className={styles.learningWrapper}>
            {/* 역량학습 타이틀 */}
            <div className={styles.main}>
                <div className={styles.mainTxt}>
                    <span>역량학습</span>
                    <span>
                        컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
                        <br />
                        컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
                    </span>
                </div>
                <img
                    className={styles.mainImg}
                    src={"/chemiverse_img/group 230.png"}
                    alt="img-pop-cardnews"
                />
            </div>
            {/* 역량학습 탭 */}
            <LearnNav />
            <Routes>
                <Route
                    path="/"
                    element={<ModuleListPage module={uData} />}
                ></Route>
                <Route
                    path="/:id"
                    element={<LearningModule module={uData} />}
                ></Route>
                <Route
                    path="workskill"
                    element={<ModuleListPage module={wData} />}
                ></Route>
                <Route
                    path="/workskill/:id"
                    element={<LearningModule module={wData} />}
                ></Route>
                <Route
                    path="peopleskill"
                    element={<ModuleListPage module={pData} />}
                ></Route>
                <Route
                    path="/peopleskill/:id"
                    element={<LearningModule module={pData} />}
                ></Route>
                <Route
                    path="selfmanage"
                    element={<ModuleListPage module={sData} />}
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
