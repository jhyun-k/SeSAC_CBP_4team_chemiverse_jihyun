import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import teacher from "./css/teacher.module.css";
import Card from "./Card";
import teacherData from "../../data/teacherData.json";

const Teacher = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>강사소개</h1>
      <ul className={teacher.teacherBox}>
        {teacherData.map((card, index) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default Teacher;
