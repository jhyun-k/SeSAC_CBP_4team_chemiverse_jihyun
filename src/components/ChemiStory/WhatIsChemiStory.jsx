import React from 'react';
import WriteChemiStory from "./WriteChemiStory";
import Journal from "./Journal";
import Goal from './Goal';
import ChemiNav from './ChemiNav';
import { Routes, Route } from "react-router-dom";

const WhatIsChemiStory = () => {
  return (
    <div className='WhatIsChemiStory'>
      <div>
        <h1>케미스토리</h1>
        <ChemiNav/>
        <Routes>
          <Route path="/ChemiStory/WriteChemiStory" element={<WriteChemiStory />}></Route>
          <Route path="/ChemiStory/Journal" element={<Journal />}></Route>
          <Route path="/ChemiStory/Goal" element={<Goal />}></Route>
        </Routes>
        <WriteChemiStory/>
      </div>
    </div>
  );
};

export default WhatIsChemiStory;