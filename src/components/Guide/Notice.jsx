import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import data from "../../data/noticeData.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostList from "../Post/PostList";
import SearchHeader from "../Post/SearchHeader";

const Notice = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('전체');

  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

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
    </div>
  );
};

export default Notice;
