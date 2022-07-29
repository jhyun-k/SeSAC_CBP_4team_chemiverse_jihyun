import React from "react";
import DiaryItem from "./DiaryItem";
import styles from './css/diary.module.css';

const DiaryList = ({ diaryList,onRemove,onEdit }) => {
  
  return (
    <div className={styles.DiaryList}>
      {/* <h2>작성 글</h2> */}
      <h4>{diaryList.length}개의 작성글이 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
