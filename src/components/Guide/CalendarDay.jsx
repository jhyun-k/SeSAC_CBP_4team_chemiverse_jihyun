import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import calendar from "./css/calendar.module.css";
import "./css/main.css";
import { useState } from "react";
import { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";

const CalendarDay = () => {
  const [title, setTitle] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEventClick = (clickInfo) => {
    const formatStart = formatDate(clickInfo.event.start, {
      month: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "UTC",
      locale: "ko",
    });
    const formatEnd = formatDate(clickInfo.event.end, {
      month: "long",
      year: "numeric",
      day: "numeric",
      timeZone: "UTC",
      locale: "ko",
    });
    setTitle(clickInfo.event.title);
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
    );
    /*  if (window.confirm(`정말로 삭제하시겠습니까? ${clickInfo.event.title}`)) {
      clickInfo.event.remove();
    } */
  };
  const handleMouseEnter = (hoverInfo) => {};
  const handleDateSelect = (selectInfo) => {
    let title = prompt("제목을 작성해주세요");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      });
    }
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
          },
          {
            title: "Another Event",
            start: "2022-07-20",
            // end: "2022-07-22",
          },
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today,dayGridMonth",
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="ko"
        selectable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventMouseEnter={handleMouseEnter}
        height="45vw"
      />
      <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        This is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal>
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
