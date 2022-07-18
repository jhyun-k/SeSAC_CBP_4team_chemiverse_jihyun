import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import calendar from "./css/calendar.module.css";
import "./css/main.css";
import { useState } from "react";

const CalendarDay = () => {
  const [title, setTitle] = useState([]);
  const [start, setStart] = useState([]);
  const eventClick = (info) => {
    info.jsEvent.preventDefault();
    console.log(info.event.start);
    setTitle(info.event.title);
    setStart(info.event.start);
    console.log(start.start);
  };
  return (
    <div className={calendar.mainBox}>
      <FullCalendar
        className={calendar.FullCalendar}
        events={[
          {
            title: "00 신입사원 과정",
            start: "2022-07-19",
            // end: "2022-07-21",
            url: "http://google.com/",
          },
          {
            title: "Another Event",
            start: "2022-07-20",
            url: "http://google.com/",
          },
        ]}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        eventClick={eventClick}
        locale="ko"
      />
      <div className={calendar.eventBox}>
        <h1 className={calendar.h1Event}>{title}</h1>
        {/* <h2 className={calendar.h2Event}>{start}</h2> */}
      </div>
    </div>
  );
};

export default CalendarDay;
