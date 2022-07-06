import React from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';

const PostTab = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FreePost />}></Route>
        <Route path='/suggestIdea' element={<SuggestIdea />}></Route>
      </Routes>
    </div>
  );
};

export default PostTab;
