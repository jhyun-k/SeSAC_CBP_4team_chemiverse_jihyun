
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PresentState from "./PresentState";
import PresentBefore from './PresentBefore';
import PresentAfter from './PresentAfter';
import styles from './css/diagnosis.module.scss'


const Present = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div className={styles.nowContainer}>
        <div className={styles.diagnosisInner}>
          <div className={styles.sidebar}>
            <Link
              className={`${selectedTab === 0 ? "active" : ""}`}
              onClick={() => setSelectedTab(0)}
              to="presentbefore"
            >
              <button className={styles.tabbutton}>#사전</button>
            </Link>
            <Link
              className={`${selectedTab === 1 ? "active" : ""}`}
              onClick={() => setSelectedTab(1)}
              to="presentafter"
            >
              <button className={styles.tabbutton}>#사후</button>
            </Link> 
          </div>


          <div className={styles.diaInner}>
            <Routes>
              <Route path="*" element={<PresentBefore/>} />
              <Route path="presentbefore" element={<PresentBefore/>} />
              <Route path="presentafter" element={<PresentAfter/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
};

export default Present;