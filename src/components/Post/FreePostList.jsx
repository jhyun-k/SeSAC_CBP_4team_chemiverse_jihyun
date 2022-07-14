import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/FreePostList.module.css';

const FreePostList = ({ lists, startNum, endNum }) => {
  return (
    <ul className={styles.freePostList}>
      <li className={styles.freePostTitle}>
        <span className={styles.postIndex}>No.</span>
        <span className={styles.postTitle}>제목</span>
        <span className={styles.userName}>작성자</span>
        <span className={styles.view}>조회수</span>
        <span className={styles.date}>작성일</span>
        <span className={styles.like}>좋아요</span>
      </li>
      {lists.slice(startNum, endNum).map((post, index) => {
        return (
          <li className={styles.freePost} key={post.id}>
            <span className={styles.postIndex}>{post.id}</span>
            <Link to={`./${post.id}`}>
              <span className={styles.postTitle}>{post.title}</span>
            </Link>
            <span className={styles.userName}>{post.userId}</span>
            <span className={styles.view}>{post.view}</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.like}>좋아요</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FreePostList;
