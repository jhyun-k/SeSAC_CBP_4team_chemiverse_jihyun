import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeNotice from './HomeNotice';
import noticeData from '../../data/noticeData.json';
import PostDetail from '../Post/PostDetail';
import WritePostPage from '../Post/WritePostPage';

const Board = () => {
  const noticeLatest = [...noticeData].reverse();

  return (
    <div>
      <h1>게시판</h1>
      <Routes>
        <Route path='/notice' element={<HomeNotice />} />
        <Route
          path='/notice/:post'
          element={<PostDetail data={noticeLatest} />}
        />
        <Route path='/notice/write' element={<WritePostPage />} />
      </Routes>
    </div>
  );
};

export default Board;
