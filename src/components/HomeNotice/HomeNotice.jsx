import React, { useEffect, useState } from 'react';
import SearchHeader from '../Post/SearchHeader';
import data from '../../data/noticeData.json';
import Pagination from '../Post/Pagination';
import PostList from '../Post/PostList';
import { Link } from 'react-router-dom';
import styles from './../Post/css/PostTab.module.css';
import HomeHeaderNavy from './../Home/HomeHeaderNavy';

const HomeNotice = () => {
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
    <div>
      <HomeHeaderNavy />
      <SearchHeader data={lists} />
      <PostList
        lists={lists}
        postIndexNum={lists}
        startNum={startNum}
        endNum={endNum}
      />
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

export default HomeNotice;
