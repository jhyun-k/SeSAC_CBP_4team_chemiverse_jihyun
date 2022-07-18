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
        {/* <h1>목표</h1>
        <DiaryItem onEdit={onEdit} diaryList={diaryList}/>
        <h1>필요역량</h1>
        <DiaryItem onEdit={onEdit} diaryList={diaryList}/>
        <h1>실행계획</h1>
        <DiaryItem onEdit={onEdit} diaryList={diaryList}/> */}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
