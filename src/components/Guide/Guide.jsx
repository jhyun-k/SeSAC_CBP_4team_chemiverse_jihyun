import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TimeTable from './TimeTable';
import Teacher from './Teacher';
import GuideNav from './GuideNav';
import Notice from './Notice';
import styles from '../ChemiStory/css/index.module.css';
import noticeData from '../../data/noticeData.json';
import PostDetail from '../Post/PostDetail';
import WritePostPage from '../Post/WritePostPage';

const Guide = () => {
  return (
    <div className={styles.chemistory}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>교육안내</span>
          <span>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글<br></br>
            컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
          </span>
        </div>
        <img
          className={styles.mainImg}
<<<<<<< HEAD
          src={'/chemiverse_img/Group 242.png'}
          alt='img-pop-cardnews'
=======
          src={"/chemiverse_img/img-pop-cardnews.png"}
          alt="img-pop-cardnews"
>>>>>>> develop
        />
      </div>
      <GuideNav />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Notice />}></Route>
        <Route path='/:post' element={<PostDetail data={noticeData} />} />
        <Route path='/write' element={<WritePostPage />} />
        <Route path='timetable' element={<TimeTable />}></Route>
        <Route path='teacher' element={<Teacher />}></Route>
=======
        <Route path="/" element={<Notice />}></Route>
        <Route path="timetable" element={<TimeTable />}></Route>
        <Route path="teacher/*" element={<Teacher />}></Route>
>>>>>>> develop
      </Routes>
    </div>
  );
};

export default Guide;
