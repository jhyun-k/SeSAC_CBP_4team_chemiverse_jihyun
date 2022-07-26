import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import calendar from "./css/calendar.module.css";
import "./css/main.css";
import { useState } from "react";
import { formatDate } from "@fullcalendar/react";

const CalendarDay = () => {
  const [title, setTitle] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const eventClick = (info) => {
    const format = formatDate(info.event.start, {
      month: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "UTC",
      locale: "ko",
    });
    const formatEnd = formatDate(info.event.end, {
      month: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "UTC",
      locale: "ko",
    });
    info.jsEvent.preventDefault();
    setTitle(info.event.title);
    setStart(format);
    setEnd(formatEnd);
  };
  return (
    <div className={calendar.mainBox}>
      <FullCalendar
        className={calendar.FullCalendar}
        events={[
          {
            title: "00 신입사원 과정",
            start: "2022-07-19",
            end: "2022-07-21",
            url: "http://google.com/",
          },
          {
            title: "Another Event",
            start: "2022-07-20",
            // end: "2022-07-22",
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
        <div className={calendar.h2Box}>
          <h2 className={calendar.h2Event}>{start}</h2>
          <h2 className={calendar.h2Event}>{end ? "~" + end : end}</h2>
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
