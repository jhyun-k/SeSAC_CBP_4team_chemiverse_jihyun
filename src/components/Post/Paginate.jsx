import React from 'react';
import { useState } from 'react';
import styles from './css/PostTab.module.css';
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';

const Paginate = ({ total, page, setPage, LIST_PER_PAGE }) => {
  const pagesNum = Math.ceil(total / LIST_PER_PAGE);
  const wholePagesNumArray = new Array(pagesNum);

  const [pagesArrStartNum, setPagesArrStartNum] = useState(0);
  const [pagesArrEndNum, setPagesArrEndNum] = useState(5);

  const handlePrevBtnClick = () => {
    setPage(page - 5);
    setPagesArrStartNum(pagesArrStartNum - 5);
    setPagesArrEndNum(pagesArrEndNum - 5);
  };
  const handleNextBtnClick = () => {
    setPage(page + 5);
    setPagesArrStartNum(pagesArrStartNum + 5);
    setPagesArrEndNum(pagesArrEndNum + 5);
  };

  const handleFirstBtnClick = () => {
    setPage(1);
    setPagesArrStartNum(0);
    setPagesArrEndNum(5);
  };
  const handleLastBtnClick = () => {
    setPage(wholePagesNumArray.length);
    setPagesArrStartNum(wholePagesNumArray.length - 5);
    setPagesArrEndNum(wholePagesNumArray.length);
    console.log(pagesArrStartNum, pagesArrEndNum);
  };

  const pagesNumArray = wholePagesNumArray.fill().map((arr, index) => {
    return index + 1;
  });

  return (
    <div className={styles.pagination}>
      <button
        onClick={handleFirstBtnClick}
        disabled={pagesArrStartNum === 0}
        className={`${styles.angleBtn} ${
          pagesArrStartNum === 0 ? styles.disabled : ''
        }`}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        onClick={handlePrevBtnClick}
        disabled={pagesArrStartNum == 0}
        className={`${styles.angleBtn} ${
          pagesArrStartNum === 0 ? styles.disabled : ''
        }`}
      >
        <FaAngleLeft />
      </button>
      {pagesNumArray
        .slice(pagesArrStartNum, pagesArrEndNum)
        .map((element, index) => {
          return (
            <button
              key={index}
              onClick={() => setPage(element)}
              /* className={
                index == page
                  ? `${styles.button} ${styles.on}`
                  : `${styles.button}`
              } */
              className={`${styles.button} ${
                index + 1 === page ? styles.on : ''
              }`}
            >
              {element}
            </button>
          );
        })}
      <button
        onClick={handleNextBtnClick}
        disabled={pagesArrEndNum >= pagesNum}
        className={`${styles.angleBtn} ${
          pagesArrEndNum >= pagesNum ? styles.disabled : ''
        }`}
      >
        <FaAngleRight />
      </button>
      <button
        onClick={handleLastBtnClick}
        disabled={pagesArrEndNum >= pagesNum}
        className={`${styles.angleBtn} ${
          pagesArrEndNum >= pagesNum ? styles.disabled : ''
        }`}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Paginate;
