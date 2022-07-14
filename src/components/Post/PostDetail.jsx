import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './css/PostDetail.module.css';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';

const PostDetail = ({ data }) => {
  const { post } = useParams();
  const selectedPost = data.find((x) => {
    return x.id == post;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const locationInclude = (name) => {
    return location.pathname.includes(name);
  };

  const backListBtn = () => {
    if (locationInclude('freepost')) {
      navigate('/main/post/freepost');
    } else if (locationInclude('suggestIdea')) {
      navigate('/main/post/suggestIdea');
    }
  };

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
        <button onClick={backListBtn} className={styles.listBtn}>
          목록
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
