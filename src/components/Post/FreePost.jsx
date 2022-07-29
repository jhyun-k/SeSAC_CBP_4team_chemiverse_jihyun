import React, { useEffect, useState } from 'react';
import Paginate from './Paginate';
import SearchHeader from './SearchHeader';
import styles from './css/PostTab.module.css';
import { Link } from 'react-router-dom';
import data from '../../data/freePostData.json';
import PostList from './PostList';
import { useRef } from 'react';

const FreePost = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('전체');

  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  const searchRef = useRef('');

  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    let search = searchRef.current.value;
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
      <Link to='./write'>
        <button className={styles.writeBtn}>글쓰기</button>
      </Link>
      <Paginate
        total={lists.length}
        page={page}
        setPage={setPage}
        LIST_PER_PAGE={LIST_PER_PAGE}
      />
    </div>
  );
};

export default FreePost;
