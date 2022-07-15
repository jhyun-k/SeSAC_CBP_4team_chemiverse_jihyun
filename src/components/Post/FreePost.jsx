import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import SearchHeader from './SearchHeader';
import styles from './css/Post.module.css';
import { Link } from 'react-router-dom';
import data from '../../data/freePostData.json';
import PostList from './PostList';

const FreePost = () => {
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
      <h1>자유게시판</h1>
      <SearchHeader data={lists} />
      <PostList lists={lists} startNum={startNum} endNum={endNum} />
      <Link to='./write'>
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

export default FreePost;
