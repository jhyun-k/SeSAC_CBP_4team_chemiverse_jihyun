import React, { useState } from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
import data from '../../data/postData.json';

const PostTab = () => {
  const [postIndex, setPostIndex] = useState(0);
  const postLatest = [...data].reverse();
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <FreePost
              postIndex={postIndex}
              setPostIndex={setPostIndex}
              data={postLatest}
            />
          }
        ></Route>
        <Route path='/suggestIdea' element={<SuggestIdea />}></Route>
        <Route
          path='/:post'
          element={
            <PostDetail
              data={postLatest}
              setPostIndex={setPostIndex}
              postIndex={postIndex}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default PostTab;
