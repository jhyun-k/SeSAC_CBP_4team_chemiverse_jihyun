import React from "react";
import CalendarDay from "./CalendarDay";
import calendar from "./css/calendar.module.css";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";

const TimeTable = () => {
  return (
    <div className={`${styles.WhatIsChemiStory} ${calendar.timetable}`}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>시간표</h1>
      <CalendarDay />
    </div>
  );
};

export default TimeTable;
