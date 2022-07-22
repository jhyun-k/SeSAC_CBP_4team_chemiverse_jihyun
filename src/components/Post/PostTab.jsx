import React, { useState } from 'react';
import FreePost from './FreePost';
import SuggestIdea from './SuggestIdea';
import { Routes, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
import freePostData from '../../data/freePostData.json';
import suggestIdeaData from '../../data/suggestIdeaData.json';
import WritePostPage from './WritePostPage';
import styles from './css/PostTab.module.css';
import PostNav from './PostNav';

const PostTab = () => {
  const freePostLatest = [...freePostData].reverse();
  const suggestIdeaLatest = [...suggestIdeaData].reverse();
  const [newContent, SetNewContent] = useState({ title: '', body: '' });

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>게시판</span>
          <span>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글<br></br>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
          </span>
        </div>
        <img
          className={styles.mainImg}
          src={'/chemiverse_img/img-pop-cardnews.png'}
          alt='img-pop-cardnews'
        />
      </div>
      <PostNav />
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
        <Route
          path='/freepost/write'
          element={
            <WritePostPage
              newContent={newContent}
              setNewContent={SetNewContent}
            />
          }
        />
        <Route
          path='/suggestIdea/write'
          element={
            <WritePostPage
              newContent={newContent}
              setNewContent={SetNewContent}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default PostTab;
