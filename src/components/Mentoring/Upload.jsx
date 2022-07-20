import React from "react";
import styles from "./css/index.module.css"
import Diary from '../Diary/Diary';
import { BsCheckLg } from "react-icons/bs";

const Upload = () => {
  return (
    <div className={styles.Upload}>
      <p className={styles.pin}>
        <BsCheckLg />
      </p>
      <h1 className={styles.title}>활동내역 업로드</h1>
      <h3 className={styles.subTitle}>성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글<br></br>성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글 성찰저널 설명 글</h3>
      <Diary />
    </div>
  );
};

export default Upload;
