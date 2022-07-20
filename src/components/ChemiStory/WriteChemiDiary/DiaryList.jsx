import React from "react";
import DiaryItem from "./DiaryItem";
import styles from './css/diary.module.css';

const DiaryList = ({ diaryList,onEdit }) => {
  
  return (
    <div className={styles.DiaryList}>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit}/>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
