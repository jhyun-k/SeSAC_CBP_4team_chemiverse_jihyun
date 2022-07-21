import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './css/PostTab.module.css';
import { MdAttachFile } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { BsArrowReturnRight } from 'react-icons/bs';

const PostList = ({ lists, startNum, endNum }) => {
  const location = useLocation();

  const locationInclude = (name) => {
    return location.pathname.includes(name);
  };

  const listTitle = () => {
    if (
      locationInclude('freepost') ||
      locationInclude('suggestIdea') ||
      locationInclude('introduce')
    ) {
      return <span className={styles.like}>좋아요</span>;
    } else if (locationInclude('notice')) {
      return <span className={styles.like}>첨부파일</span>;
    }
  };
  const list = (post) => {
    if (
      locationInclude('freepost') ||
      locationInclude('suggestIdea') ||
      locationInclude('introduce')
    ) {
      return <span className={styles.like}>{post.like}</span>;
    } else if (locationInclude('notice')) {
      return (
        <span className={styles.like}>{post.file ? <MdAttachFile /> : ''}</span>
      );
    }
  };

  return (
    <ul className={styles.freePostList}>
      <li className={styles.freePostTitle}>
        <span className={styles.postIndex}>No.</span>
        <span className={styles.postTitle}>제목</span>
        <span
          className={styles.userName}
          style={
            !locationInclude('qna') ? { display: 'block' } : { display: 'none' }
          }
        >
          작성자
        </span>
        {listTitle()}
        <span className={styles.view}>조회수</span>
        <span className={styles.date}>작성일</span>
      </li>
      {lists.slice(startNum, endNum).map((post, index) => {
        return (
          <li className={styles.freePost} key={post.id}>
            <span className={styles.postIndex}>
              {post.answer ? <BsArrowReturnRight /> : post.id}
            </span>
            <Link to={post.private ? './secret' : `./${post.id}`}>
              <span className={styles.postTitle}>
                {post.title}
                {post.private ? <AiFillLock /> : ''}
              </span>
            </Link>
            <span
              className={styles.userName}
              style={post.userId ? { display: 'block' } : { display: 'none' }}
            >
              {post.userId}
            </span>{' '}
            {list(post)}
            <span className={styles.view}>{post.view}</span>
            <span className={styles.date}>{post.date}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
