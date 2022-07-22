/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import teacher from "./css/teacher.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ card, index }) => {
  const navigate = useNavigate();
  const onClick = () => {
    let id = card.id;
    console.log(id);
    navigate(`./${id}`);
  };
  return (
    <li key={card.id} className={teacher.teacherList}>
      <div>
        <div className={teacher.teacherImg}>
          <img src={card.image} />
        </div>
      </div>
      <div className={teacher.listBox}>
        <div className={teacher.title}>
          <span>{card.name}</span>
          <span>{card.plus}</span>
          <span>강사</span>
        </div>
        <div className={teacher.desc}>
          <p>{card.description}</p>
          <p>{card.desc}</p>
        </div>
        <div className={teacher.class}>
          <p className={teacher.current}>최근강의</p>
          <p className={teacher.classList}>{card.class}</p>
        </div>
        <button type="button" onClick={onClick}>
          상세보기
        </button>
      </div>
    </li>
  );
};

export default Card;
