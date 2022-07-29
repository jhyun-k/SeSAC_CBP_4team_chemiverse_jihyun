import React from "react";
import CalendarDay from "./CalendarDay";
import calendar from "./css/calendar.module.css";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";

const TimeTable = () => {
  return (
    <div className={`${styles.JournalGoal} ${calendar.timetable}`}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>시간표</h1>
      <h3 className={styles.subTitle}>
        시간표 설명 글 시간표 설명 글 시간표 설명 글 시간표 설명 글 시간표 설명
        글<br></br>시간표 설명 글 시간표 설명 글 시간표 설명 글 시간표 설명 글
      </h3>
      <CalendarDay />
    </div>
  );
};

export default TimeTable;
