<<<<<<< HEAD
import React from 'react';
import styles from '../Post/css/PostTab.module.css';
import { useRef, useState, useEffect } from 'react';
import PostList from '../Post/PostList';
import SearchHeader from '../Post/SearchHeader';
import Paginate from '../Post/Paginate';
import data from '../../data/noticeData.json';
=======
import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import data from "../../data/noticeData.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Post/Pagination";
import PostList from "../Post/PostList";
import SearchHeader from "../Post/SearchHeader";
>>>>>>> develop

const Notice = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
<<<<<<< HEAD
  const [category, setCategory] = useState('전체');

=======
  //const [search, setSearch] = useState([]);
>>>>>>> develop
  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

<<<<<<< HEAD
  const searchRef = useRef('');

=======
>>>>>>> develop
  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

<<<<<<< HEAD
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    const search = searchRef.current.value;
    const postLatest = [...data].reverse();

    if (search === null || search === '') {
      setLists(postLatest);
    } else if (category === '전체' || category === undefined) {
      const filterData = [...postLatest].filter(
        (ele) =>
          ele.title.includes(search) ||
          ele.body.includes(search) ||
          ele.userId.includes(search)
      );
      setLists(filterData);
    } else if (category === '제목') {
      const filterData = [...postLatest].filter((ele) =>
        ele.title.includes(search)
      );
      setLists(filterData);
    } else if (category === '작성자') {
      const filterData = [...postLatest].filter((ele) =>
        ele.userId.includes(search)
      );
      setLists(filterData);
    } else if (category === '내용') {
      const filterData = [...postLatest].filter((ele) =>
        ele.body.includes(search)
      );
      setLists(filterData);
    }
  };

  return (
    <div className={styles.post}>
      <SearchHeader
        data={lists}
        onChangeSearch={onChangeSearch}
        searchRef={searchRef}
        onChangeCategory={onChangeCategory}
      />
      <PostList lists={lists} startNum={startNum} endNum={endNum} />
      <Paginate
=======
  return (
    <div>
      <div className={styles.WhatIsChemiStory}>
        <p className={styles.pin}>
          <BsCheckLg />
        </p>
        <h1 className={styles.title}>공지사항</h1>
      </div>
      <SearchHeader data={lists} />
      <PostList
        lists={lists}
        postIndexNum={lists}
        startNum={startNum}
        endNum={endNum}
      />
      <Link to="./write">
        <button className={styles.writeBtn}>작성하기</button>
      </Link>
      <Pagination
>>>>>>> develop
        total={lists.length}
        page={page}
        setPage={setPage}
        LIST_PER_PAGE={LIST_PER_PAGE}
      />
    </div>
  );
};

export default Notice;
