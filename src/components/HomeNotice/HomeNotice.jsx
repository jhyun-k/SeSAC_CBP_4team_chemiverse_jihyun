import React, { useEffect, useState } from 'react';
import SearchHeader from '../Post/SearchHeader';
import noticeData from '../../data/noticeData.json';
import Pagination from '../Post/Pagination';
import FreePostList from '../Post/FreePostList';

const HomeNotice = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  //const [search, setSearch] = useState([]);
  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;
  useEffect(() => {
    setLists(noticeData);
  }, []);
  return (
    <div>
      <h1>공지사항</h1>
      <SearchHeader data={noticeData} />
      <FreePostList
        lists={noticeData}
        postIndexNum={noticeData}
        startNum={startNum}
        endNum={endNum}
      />
      <Pagination
        total={lists.length}
        page={page}
        setPage={setPage}
        LIST_PER_PAGE={LIST_PER_PAGE}
      />
    </div>
  );
};

export default HomeNotice;
