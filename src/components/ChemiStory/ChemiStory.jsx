import React from "react";
import WriteChemiStory from "./WriteChemiStory";
import Journal from "./Journal";
import Goal from "./Goal";
import ChemiNav from "./ChemiNav";
import { Routes, Route } from "react-router-dom";
import WhatIsChemiStory from "./WhatIsChemiStory";
import index from "./css/index.css"

const ChemiStory = () => {
  return (
    <div className="chemistory">
      <h1 className="main">
        <img
          className="chemi-img"
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        Chemi Story
      </h1>
      <h4>컨텐츠 설명글</h4>
      <ChemiNav />
      <Routes>
        <Route path="/" element={<WhatIsChemiStory />}></Route>
        <Route path="writeChemiStory" element={<WriteChemiStory />}></Route>
        <Route path="journal" element={<Journal />}></Route>
        <Route path="goal" element={<Goal />}></Route>
      </Routes>
    </div>
  );
};

export default ChemiStory;
