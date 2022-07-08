import React from 'react';
import { useState } from 'react';

const Pagination = ({ total, page, setPage, LIST_PER_PAGE }) => {
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

  console.log(pagesArrStartNum, pagesArrEndNum, pagesNum);

  return (
    <div>
      <button onClick={handleFirstBtnClick} disabled={pagesArrStartNum === 0}>
        처음
      </button>
      <button onClick={handlePrevBtnClick} disabled={pagesArrStartNum == 0}>
        이전
      </button>
      {pagesNumArray
        .slice(pagesArrStartNum, pagesArrEndNum)
        .map((element, index) => {
          return (
            <button key={index} onClick={() => setPage(element)}>
              {element}
            </button>
          );
        })}
      <button
        onClick={handleNextBtnClick}
        disabled={pagesArrEndNum >= pagesNum}
      >
        이후
      </button>
      <button
        onClick={handleLastBtnClick}
        disabled={pagesArrEndNum >= pagesNum}
      >
        끝
      </button>
    </div>
  );
};

export default Pagination;
