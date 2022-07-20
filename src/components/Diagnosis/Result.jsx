import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PresentState from "./PresentState";
import DiagnosisResult from "./DiagnosisResult";

const Result = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="nowContainer">
      <div className="selfTestContainer_title">진단결과 보기</div>

      <div className="selfTestContainer_box">
        <div className="selfTestContainer_sidebar">
          <Link
            className={`${selectedTab === 0 ? "active" : ""}`}
            onClick={() => setSelectedTab(0)}
            to="/main/diagnosis/result/before"
          >
            <button>#사전</button>
          </Link>
          <Link
            className={`${selectedTab === 1 ? "active" : ""}`}
            onClick={() => setSelectedTab(1)}
            to="/main/diagnosis/result/after"
          >
            <button>#사후</button>
          </Link>
        </div>
        <div className="selfTestContainer_content">
          <Routes>
            <Route path="*" element={<PresentState />} />
            <Route path="before" element={<PresentState />} />
            <Route path="after" element={<DiagnosisResult />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Result;
