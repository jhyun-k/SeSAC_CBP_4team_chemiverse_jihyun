import React from "react";
import CalendarDay from "./CalendarDay";
import calendar from "./css/calendar.module.css";

const TimeTable = () => {
  return (
    <div className={calendar.timetable}>
      <h1>시간표</h1>
      <CalendarDay />
    </div>
  );
};

export default TimeTable;
