import React from 'react';

import './css/postList.css';

const FreePostList = ({ lists, startNum, endNum }) => {
  return (
    <ul className='freePostList'>
      {lists
        .reverse()
        .slice(startNum, endNum)
        .map((post, index) => {
          return (
            <li className='freePost'>
              <span>{index + 1}</span>
              <span className='postTitle'>{post.title}</span>
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
