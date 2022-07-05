import React from "react";
import { Routes, Route } from "react-router-dom";
import TimeTable from "./TimeTable";
import Teacher from "./Teacher";
import GuideNav from "./GuideNav";
import Notice from "./Notice";

const Guide = () => {
  return (
    <div className="guide">
      <GuideNav />
      <Routes>
        <Route path="." element={<Notice />}></Route>
        <Route path="timetable" element={<TimeTable />}></Route>
        <Route path="teacher" element={<Teacher />}></Route>
      </Routes>
    </div>
  );
};

export default Guide;
