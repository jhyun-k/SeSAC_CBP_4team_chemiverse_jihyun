import React from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
import data from '../../data/postData.json';

const PostTab = () => {
  const postLatest = [...data].reverse();
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<FreePost postLatest={postLatest} post={data} />}
        ></Route>
        <Route path='/suggestIdea' element={<SuggestIdea />}></Route>
        <Route path='/:post' element={<PostDetail data={postLatest} />}></Route>
      </Routes>
    </div>
  );
};

export default PostTab;
