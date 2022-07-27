import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import calendar from "./css/calendar.module.css";
import "./css/main.css";
import { useState } from "react";
import { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarDay = () => {
  /*   const eventClick = (info) => {
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
  }; */

  return (
    <div className={calendar.mainBox}>
      <FullCalendar
        className={calendar.FullCalendar}
        events={[
          {
            title: "00 신입사원 과정",
            start: "2022-07-21",
            end: "2022-07-25",
          },
          {
            title: "Another Event",
            start: "2022-07-20",
            // end: "2022-07-22",
          },
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth",
        }}
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        locale="ko"
        selectable={true}
        navLinks={true}
      />
      {/*  <div className={calendar.eventBox}>
        <h1 className={calendar.h1Event}>{title}</h1>
        <div className={calendar.h2Box}>
          <h2 className={calendar.h2Event}>{start}</h2>
          <h2 className={calendar.h2Event}>{end ? "~" + end : end}</h2>
        </div>
      </div> */}
    </div>
  );
};

export default CalendarDay;
