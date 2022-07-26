import React, { useEffect, useState } from 'react';
import styles from '../Post/css/PostTab.module.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:src/components/HomeNotice/HomeNotice.jsx
import styles from './../Post/css/PostTab.module.css';
import HomeHeaderNavy from './../Home/HomeHeaderNavy';
=======
import { useRef } from 'react';
import PostList from '../Post/PostList';
import Paginate from '../Post/Paginate';
import data from '../../data/qnaData.json';
>>>>>>> jiyoung:src/components/Board/QnA.jsx

const QnA = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);

  const LIST_PER_PAGE = 10;
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    const postLatest = [...data].reverse();
    setLists(postLatest);
  }, []);

  return (
<<<<<<< HEAD:src/components/HomeNotice/HomeNotice.jsx
    <div>
      <HomeHeaderNavy />
      <SearchHeader data={lists} />
      <PostList
        lists={lists}
        postIndexNum={lists}
        startNum={startNum}
        endNum={endNum}
      />
=======
    <div className={styles.post}>
      <PostList lists={lists} startNum={startNum} endNum={endNum} />
>>>>>>> jiyoung:src/components/Board/QnA.jsx
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

export default QnA;
