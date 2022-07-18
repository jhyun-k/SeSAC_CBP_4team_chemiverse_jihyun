import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

import FreePostList from './FreePostList';
import SearchHeader from './SearchHeader';
import styles from './css/Post.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import data from '../../data/suggestIdeaData.json';
import PostDetail from './PostDetail';
import WritePostPage from './WritePostPage';

const SuggestIdea = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  //const [search, setSearch] = useState([]);
  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

  return (
    <div className={styles.post}>
      <h1>아이디어 제시</h1>
      <SearchHeader data={lists} />
      <FreePostList
        lists={lists}
        postIndexNum={data}
        startNum={startNum}
        endNum={endNum}
      />
      <Link to='/main/post/write'>
        <button className={styles.writeBtn}>작성하기</button>
      </Link>
      <Pagination
        total={lists.length}
        page={page}
        setPage={setPage}
        LIST_PER_PAGE={LIST_PER_PAGE}
      />
    </div>
  );
};

export default SuggestIdea;
