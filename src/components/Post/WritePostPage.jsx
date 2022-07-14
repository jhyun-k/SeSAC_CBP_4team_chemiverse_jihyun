import React from 'react';
import styles from './css/WritePostPage.module.css';

const WritePostPage = () => {
  return (
    <form className={styles.writeForm}>
      <input
        className={styles.titleInput}
        type='text'
        placeholder='제목을 입력해주세요.'
      />
      <input
        className={styles.bodyInput}
        type='text'
        placeholder='내용을 입력해주세요.'
      />
      <div className={styles.btnBox}>
        <button className={styles.temporaryBtn}>임시저장</button>
        <button className={styles.submitBtn}>등록</button>
      </div>
    </form>
  );
};

export default WritePostPage;
