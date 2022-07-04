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
import Login from "./Login/Login";
import MainPage from "./MainPage";

const Main = () => {
  const title = "expert";
  return (
    <div className="main">
      <Header title={title} />
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/main/move" element={<Move />}></Route>
        <Route path="/main/*" element={<Guide />}></Route>
        <Route path="/main/diagnosis" element={<Diagnosis />}></Route>
        <Route path="/main/learning" element={<Learning />}></Route>
        <Route path="/main/story" element={<Story />}></Route>
        <Route path="/main/mento" element={<Mento />}></Route>
        <Route path="/main/post" element={<Post />}></Route>
        <Route path="/main/mypage" element={<Mypage />}></Route>
        <Route path="/main/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
