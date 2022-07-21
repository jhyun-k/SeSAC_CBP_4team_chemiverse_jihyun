import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeNotice from './HomeNotice';
import noticeData from '../../data/noticeData.json';
import introduceData from '../../data/introduceData.json';
import qnaData from '../../data/qnaData.json';
import PostDetail from '../Post/PostDetail';
import WritePostPage from '../Post/WritePostPage';
import Introduce from './Introduce';
import QnA from './QnA';
import Secret from './Secret';

const Board = () => {
  return (
    <div>
      <h1>게시판</h1>
      <Routes>
        <Route path='/notice' element={<HomeNotice />} />
        <Route path='/introduce' element={<Introduce />} />
        <Route path='/qna' element={<QnA />} />
        <Route
          path='/notice/:post'
          element={<PostDetail data={noticeData} />}
        />
        <Route
          path='/introduce/:post'
          element={<PostDetail data={introduceData} />}
        />
        <Route path='/qna/:post' element={<PostDetail data={qnaData} />} />
        <Route path='/notice/write' element={<WritePostPage />} />
        <Route path='/introduce/write' element={<WritePostPage />} />
        <Route path='/qna/write' element={<WritePostPage />} />

        <Route path='/qna/secret' element={<Secret />} />
      </Routes>
    </div>
  );
};

export default Board;
