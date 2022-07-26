import React from 'react';
import Result from './Result';
import styles from './css/diagnosis.module.scss'
import { BsCheckLg } from "react-icons/bs";

const DiagnosisResult = () => {
  return (
    <div>
    <p className={styles.pin}>
    <BsCheckLg />
    </p>
    <h2 className={styles.title}> 진단결과 보기 </h2>
    <Result />
    </div>
  );
};

export default DiagnosisResult;