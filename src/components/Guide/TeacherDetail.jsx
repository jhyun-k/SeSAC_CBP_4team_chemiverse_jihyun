/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import teacher from "./css/teacher.module.css";

const TeacherDetail = ({ teacherData }) => {
  let { id } = useParams();
  const target = teacherData.find((x) => {
    return Number(x.id) === Number(id);
  });
  /* console.log(target); */
  return (
    <div className={teacher.target}>
      <div className={teacher.profileBox}>
        <div className={teacher.picture}>
          <img src={target.picture} alt={target.title} />
        </div>
        <div className={teacher.desc}>
          <p className={teacher.name}>
            <span>{target.name}</span> {target.plus}강사
          </p>
          <div className={teacher.career}>
            <span>주요경력</span>
            <p>{target.career}</p>
          </div>
          <div className={teacher.education}>
            <span>학력 및 자격, 저술 활동</span>
            <p>{target.education}</p>
          </div>
        </div>
      </div>
      <div className={teacher.video}>
        <iframe
          id={target.id}
          width="100%"
          height="100%"
          src={target.video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className={teacher.recordBox}>
        <div className={teacher.record}>
          <span>해당 분야 주요 출강 이력</span>
          <p>{target.record}</p>
        </div>
        <div className={teacher.lecture}>
          <span>강의 가능 분야</span>
          <p>{target.lecture}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
