import React from 'react';
import styles from '../Post/css/PostTab.module.css';
import { useNavigate } from 'react-router-dom';

const Secret = () => {
  const navigate = useNavigate();
  const backBtnClick = () => {
    navigate('/board/qna');
  };
  return (
    <div className={styles.secretPage}>
      <div className={styles.message}>비밀글입니다.</div>
      <div>
        <button className={styles.listBtn} onClick={backBtnClick}>
          목록
        </button>
      </div>
    </div>
  );
};

export default Secret;
