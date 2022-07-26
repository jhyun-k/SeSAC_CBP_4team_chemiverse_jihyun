import React from "react";
import teacher from "./css/teacher.module.css";
import { BsCheckLg } from "react-icons/bs";
import styles from "../ChemiStory/css/index.module.css";
import teacherData from "../../data/teacherData.json";
import { Link, useParams } from "react-router-dom";

const TeacherCard = (props) => {
  return (
    <div>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>강사소개</h1>
      <ul className={teacher.teacherBox}>
        {teacherData.map((card, index) => (
          <li key={card.id} className={teacher.teacherList}>
            <div>
              <div className={teacher.teacherImg}>
                <img src={card.image} alt={card.name} />
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
              <button type="button">
                <Link to={`./${card.id}`}>상세보기</Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherCard;
