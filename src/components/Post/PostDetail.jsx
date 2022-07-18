import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './css/PostDetail.module.css';
import SearchHeader from './SearchHeader';
import SearchBar from './SearchBar';

const PostDetail = ({ data }) => {
  const { post } = useParams();
  const selectedPost = data.find((x) => {
    return x.id == post;
  });

  console.log(selectedPost);
  return (
    <div className={styles.wrap}>
      <SearchBar />
      <div className={styles.headerBox}>
        <h2 className={styles.title}>{selectedPost.title}</h2>
        <div className={styles.postInfo}>
          <span>{selectedPost.userId}</span>
          <span>조회수</span>
          <span>2022.10.12</span>
        </div>
      </div>
      <div className={styles.body}>{selectedPost.body}</div>
      <div>
        {/* <Link to='/freepost'> */}
        <button className={styles.listBtn}>목록</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default PostDetail;
