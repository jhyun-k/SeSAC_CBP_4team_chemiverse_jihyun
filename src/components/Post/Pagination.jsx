import React from 'react';

const Pagination = ({ total, page, setPage, LIST_PER_PAGE }) => {
  const pagesNum = Math.ceil(total / LIST_PER_PAGE);
  const pagesNumArray = new Array(pagesNum);
  return (
    <div>
      <button>이전</button>
      {pagesNumArray.fill().map((element, index) => {
        return (
          <button key={index + 1} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        );
      })}
      <button>이후</button>
    </div>
  );
};

export default Pagination;
