import React, { useEffect, useState } from 'react';
import styles from '../Post/css/PostTab.module.css';
import { Link } from 'react-router-dom';
import PostList from '../Post/PostList';
import Paginate from '../Post/Paginate';
import data from '../../data/qnaData.json';
import { BsCheckLg } from 'react-icons/bs';

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
    <>
      <div className={styles.menuTitleBanner}>
        <p className={styles.pin}>
          <BsCheckLg />
        </p>
        <h1 className={styles.title}>QnA</h1>
        <h3 className={styles.subTitle}>
          문의사항을 남겨 주시면 신속하게 답변해 드리겠습니다.
        </h3>
      </div>
      <div className={styles.post}>
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
    </>
  );
};

export default QnA;
