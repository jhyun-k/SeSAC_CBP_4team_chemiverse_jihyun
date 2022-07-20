import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";

const Notice = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>공지사항</h1>
    </div>
  );
};

export default Notice;
