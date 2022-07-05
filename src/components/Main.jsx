import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Move from "./Move";
import Guide from "./Guide/Guide";
import Diagnosis from "./Diagnosis";
import Learning from "./Learning";
import Story from "./Story";
import Mento from "./Mento";
import Post from "./Post";
import Mypage from "./Mypage";
import Login from "./Login";
import MainPage from "./MainPage";

const Main = () => {
  const title = "expert";
  return (
    <div className="main">
      <Header title={title} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="move" element={<Move />}></Route>
        <Route path="guide/*" element={<Guide />}></Route>
        <Route path="diagnosis" element={<Diagnosis />}></Route>
        <Route path="learning" element={<Learning />}></Route>
        <Route path="story" element={<Story />}></Route>
        <Route path="mento" element={<Mento />}></Route>
        <Route path="post" element={<Post />}></Route>
        <Route path="mypage" element={<Mypage />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
