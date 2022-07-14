import React from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
import freePostData from '../../data/freePostData.json';
import suggestIdeaData from '../../data/suggestIdeaData.json';
import WritePostPage from './WritePostPage';

const PostTab = () => {
  const freePostLatest = [...freePostData].reverse();
  const suggestIdeaLatest = [...suggestIdeaData].reverse();

  return (
    <div>
      <h1>게시판</h1>
      <Routes>
        <Route path='/freepost' element={<FreePost />} />
        <Route path='/suggestIdea' element={<SuggestIdea />} />
        <Route
          path='/freepost/:post'
          element={<PostDetail data={freePostLatest} />}
        />
        <Route
          path='/suggestIdea/:post'
          element={<PostDetail data={suggestIdeaLatest} />}
        />
        <Route path='/freepost/write' element={<WritePostPage />} />
        <Route path='/suggestIdea/write' element={<WritePostPage />} />
      </Routes>
    </div>
  );
};

export default PostTab;
