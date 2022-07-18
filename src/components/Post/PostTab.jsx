import React from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
import data from '../../data/freePostData.json';
import WritePostPage from './WritePostPage';

const PostTab = () => {
  const postLatest = [...data].reverse();
  return (
    <div>
      <h1>게시판</h1>
      <Routes>
        <Route
          path='/freepost'
          element={<FreePost postLatest={postLatest} post={data} />}
        ></Route>
        <Route
          path='/suggestIdea'
          element={<SuggestIdea postLatest={postLatest} post={data} />}
        ></Route>
        <Route
          path='/freepost/:post'
          element={<PostDetail data={postLatest} />}
        ></Route>
        <Route
          path='/suggestIdea/:post'
          element={<PostDetail data={postLatest} />}
        ></Route>
        <Route path='/freepost/write' element={<WritePostPage />}></Route>
        <Route path='/suggestIdea/write' element={<WritePostPage />}></Route>
      </Routes>
    </div>
  );
};

export default PostTab;
