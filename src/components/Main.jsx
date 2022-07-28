import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Move from "./Move/Move";
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
import { useState} from "react";

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
};

export default Main;
