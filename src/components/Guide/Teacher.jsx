import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";


const Teacher = () => {
  const [teacherData, setTeacherData] = useState([]);
  const dataUrl = "./data/teacherData.json";
  useEffect(() => {
    (async () => {
      const res = await axios.get(dataUrl);
      setTeacherData(res.data);
    })();
  }, []);
  return (
    <div className="teacher">
      <div className={styles.WhatIsChemiStory}>
        <p className={styles.pin}>
          <BsCheckLg />
        </p>
        <h1 className={styles.title}>강사소개</h1>
      </div>
    </div>
  );
};

export default Teacher;
