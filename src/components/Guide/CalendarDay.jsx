import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import calendar from "./css/calendar.module.css";
import "./css/main.css";
import { useState } from "react";
import { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const CalendarDay = () => {
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`${clickInfo.event.title} 일정을 삭제하시겠습니까? `)) {
      clickInfo.event.remove();
    }
  };
  const handleDateSelect = (selectInfo) => {
    let title = prompt("제목을 작성해주세요");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        display: "auto",
        extendedProps: {
          description: `${title} ${
            selectInfo.start.getMonth() + 1
          }.${selectInfo.start.getDate()}~${selectInfo.end.getMonth() + 1}.${
            selectInfo.end.getDate() - 1
          }`,
        },
      });
    }
  };

  /* 
   const [title, setTitle] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const formatStart = formatDate(info.event.start, {
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
    setTitle(info.event.title);
    setStart(formatStart);
    setEnd(formatEnd);
    return (
      <div className={calendar.eventBox}>
        <h1 className={calendar.h1Event}>{title}</h1>
        <div className={calendar.h2Box}>
          <h2 className={calendar.h2Event}>{start}</h2>
          <h2 className={calendar.h2Event}>
            {clickInfo.event.end ? "~" + end : end}
          </h2>
        </div>
      </div>
    ); */

  const handleTooltip = (info) => {
    tippy(info.el, {
      content: info.event.extendedProps.description,
      placement: "top",
    });
  };

  return (
    <div className={calendar.mainBox}>
      <FullCalendar
        className={calendar.FullCalendar}
        events={[
          {
            title: "신입사원 과정",
            start: "2022-07-19",
            end: "2022-07-21",
            extendedProps: {
              description: "신입사원 과정 7.19~7.20",
            },
          },
          {
            title: "교육안내",
            start: "2022-07-22",
            // end: "2022-07-22",
            extendedProps: {
              description: "교육안내 7.22~7.22",
            },
          },
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "today",
          center: "title",
          right: "prev,next",
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="ko"
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        height="45vw"
        eventDidMount={handleTooltip}
        eventBackgroundColor="#9498D1"
        eventBorderColor="#9498D1"
      />

      {/* <div className={calendar.eventBox}>
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
