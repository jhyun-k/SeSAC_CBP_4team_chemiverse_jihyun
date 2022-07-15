import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import calendar from "./css/calendar.module.css";

const CalendarDay = () => {
  return (
    <div className={calendar.mainBox}>
      <FullCalendar events={[]} defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
      <div>mainbox</div>
    </div>
  );
};

export default CalendarDay;
