import React from "react";
import teacher from "./css/teacher.module.css";
import teacherData from "../../data/teacherData.json";
import Card from "./Card";
import { BsCheckLg } from "react-icons/bs";
import styles from "../ChemiStory/css/index.module.css";

const TeacherCard = ({ card }) => {
  return (
    <div>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>강사소개</h1>
      <ul className={teacher.teacherBox}>
        {teacherData.map((card, index) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default TeacherCard;
