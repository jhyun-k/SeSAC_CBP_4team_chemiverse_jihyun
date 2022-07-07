import React from 'react';
import { Link } from 'react-router-dom';
import './css/postList.css';

const FreePostList = ({ lists, startNum, endNum }) => {
  return (
    <ul className='freePostList'>
      {lists.slice(startNum, endNum).map((post, index) => {
        return (
          <li className='freePost' key={post.id}>
            <span className='postIndex'>{post.id}</span>
            <Link to={`./${post.id}`}>
              <span className='postTitle'>{post.title}</span>
            </Link>
            <span>{post.userId}</span>
            <span>조회수</span>
            <span>등록일</span>
            <span>좋아요</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FreePostList;
