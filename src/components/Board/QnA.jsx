import React, { useEffect, useState } from 'react';
import styles from '../Post/css/PostTab.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import PostList from '../Post/PostList';
import SearchHeader from '../Post/SearchHeader';
import Pagination from '../Post/Pagination';
import data from '../../data/qnaData.json';

const QnA = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);

  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  const searchRef = useRef('');

  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

  const onChangeSearchCategory = (e) => {
    onChangeSearch('', e.target.value);
  };
  const onChangeSearch = (e, category) => {
    const search = searchRef.current.value;
    const postLatest = [...data].reverse();
    console.log(category);
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
      <PostList lists={lists} startNum={startNum} endNum={endNum} />
      <Link to='./write'>
        <button className={styles.writeBtn}>글쓰기</button>
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

export default QnA;
