import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/FreePostList.module.css';

const FreePostList = ({ lists, startNum, endNum }) => {
  return (
    <ul className={styles.freePostList}>
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
            <span>좋아요</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FreePostList;
