import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Move from "./Move";
import Guide from "./Guide/Guide";
import Diagnosis from "./Diagnosis/Diagnosis";
import Learning from "./Learning/Learning";
import Mypage from "./Mypage";
import MainPage from "./MainPage";
import Mentoring from "./Mentoring/Mentoring";
import ChemiStory from "./ChemiStory/ChemiStory";
import FreePost from "./Post/FreePost";
import SuggestIdea from "./Post/SuggestIdea";
import PostTab from "./Post/PostTab";
import Loginok from "./Login/Loginok";
import { useState, useEffect } from "react";

<<<<<<< HEAD

const Main = ({setAuth,auth}) => {
    const title = "expert";
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const navList = [
        { content: '교육장 이동', href: './move' },
        { content: '교육안내', href: './guide' },
        { content: '진단', href: './diagnosis' },
        { content: '역량학습', href: './learning' },
        { content: 'ChemiStory', href: './chemiStory' },
        { content: '멘토링', href: './mentoring' },
        { content: '게시판', href: './post/freepost' },]

    return (
        <div className="main">
            <Header title={title} auth={auth} setAuth={setAuth} setIsOpen={setIsOpen} />
            <Routes>
                
                <Route path="/" element={<MainPage auth={auth} />}></Route>
                <Route path="move" element={<Move />}></Route>
                <Route path="guide/*" element={<Guide />}></Route>
                <Route path="diagnosis/*" element={<Diagnosis />}></Route>
                <Route path="learning/*" element={<Learning />}></Route>
                <Route path="chemiStory/*" element={<ChemiStory />}></Route>
                <Route path="mentoring/*" element={<Mentoring />}></Route>
                <Route path="post/*" element={<PostTab />}></Route>
                <Route path="mypage" element={<Mypage />}></Route>
            </Routes>
        </div>
    );
=======
const Main = ({ setAuth, auth }) => {
  const title = "expert";
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <Header
        title={title}
        auth={auth}
        setAuth={setAuth}
        setIsOpen={setIsOpen}
      />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="move" element={<Move />}></Route>
        <Route path="guide/*" element={<Guide />}></Route>
        <Route path="diagnosis/*" element={<Diagnosis />}></Route>
        <Route path="learning/*" element={<Learning />}></Route>
        <Route path="chemiStory/*" element={<ChemiStory />}></Route>
        <Route path="mentoring/*" element={<Mentoring />}></Route>
        <Route path="post/*" element={<PostTab />}></Route>
        <Route path="mypage" element={<Mypage />}></Route>
      </Routes>
    </div>
  );
>>>>>>> develop
};

export default Main;
