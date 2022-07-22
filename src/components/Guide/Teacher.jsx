import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import teacher from "./css/teacher.module.css";
import { Route, Routes } from "react-router-dom";
import TeacherCard from "./TeacherCard";
import CardId from "./CardId";

const Teacher = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <Routes>
        <Route path="/*" element={<TeacherCard />} />
        <Route path="/:id" element={<CardId />} />
      </Routes>
    </div>
  );
};

export default Teacher;
