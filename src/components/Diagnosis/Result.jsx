import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DiagnosisResult from "./DiagnosisResult";
import ResultAfter from './ResultAfter';
import ResultBefore from './ResultBefore';
import styles from './css/diagnosis.module.scss'

const Result = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="nowContainer">
      <div className={styles.diagnosisarea}>
        <div className={styles.sidebar}>
          <Link
            className={`${selectedTab === 0 ? "active" : ""}`}
            onClick={() => setSelectedTab(0)}
            to="resultbefore"
          >
            <button className={styles.tabbutton}>#사전</button>
          </Link>
          <Link
            className={`${selectedTab === 1 ? "active" : ""}`}
            onClick={() => setSelectedTab(1)}
            to="resultafter"
          >
            <button className={styles.tabbutton}>#사후</button>
          </Link>
        </div>
        <div className={styles.diaInner}>
          <Routes>
            <Route path="*" element={<ResultBefore />} />
            <Route path="resultbefore" element={<ResultBefore />} />
            <Route path="resultafter" element={<ResultAfter />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Result; 
 