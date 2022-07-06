import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import data from '../../data/postData.json';
import FreePostList from './FreePostList';

const FreePost = () => {
  const [lists, setLists] = useState([]);
  const LIST_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    setLists(data);
  }, []);

  return (
    <div className='post'>
      <h1>자유게시판</h1>
      <SearchBar />
      <FreePostList lists={lists} startNum={startNum} endNum={endNum} />
      <Pagination
        total={lists.length}
        page={page}
        setPage={setPage}
        LIST_PER_PAGE={LIST_PER_PAGE}
      />
    </div>
  );
};

export default FreePost;
