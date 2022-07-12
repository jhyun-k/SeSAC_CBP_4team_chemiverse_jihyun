import React from "react";
import styles from "./css/index.module.css"
import Diary from '../Diary/Diary';

const Upload = () => {
  return (
    <div className={styles.Upload}>
      <h2 className={styles.title}>활동내역 업로드</h2>
      <h3>활동내역 업로드 설명 글</h3>
      <Diary />
    </div>
  );
};

export default Upload;
