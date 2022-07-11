import React from 'react';
import MentoringNav from './MentoringNav';
import { Routes, Route } from "react-router-dom";
import WhatIsMentoring from './WhatIsMentoring';
import WritePlan from './WritePlan';
import Upload from './Upload';
import index from "./css/index.css"

const Mentoring = () => {
  return (
    <div className='Mentoring'>
      <h1 className="main">
        <img
          className="chemi-img"
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        멘토링
      </h1>
      <h4>컨텐츠 설명글</h4>
      <MentoringNav/>
      <Routes>
        <Route path="/" element={<WhatIsMentoring />}></Route>
        <Route path="writePlan" element={<WritePlan />}></Route>
        <Route path="upload" element={<Upload />}></Route>
      </Routes>
    </div>
  );
};

export default Mentoring;
