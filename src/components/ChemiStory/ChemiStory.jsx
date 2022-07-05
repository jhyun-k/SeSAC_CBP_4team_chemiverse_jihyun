import React from "react";
import WriteChemiStory from "./WriteChemiStory";
import Journal from "./Journal";
import Goal from './Goal';
import ChemiNav from './ChemiNav';
import { Routes, Route } from "react-router-dom";
import WhatIsChemiStory from "./WhatIsChemiStory";

const ChemiStory = () => {
  return (
    <div>
      <ChemiNav/>
      <Routes>
        <Route path="/chemiStory" element={<WhatIsChemiStory />}></Route>
        <Route path="/chemiStory/writeChemiStory" element={<WriteChemiStory />}></Route>
        <Route path="/chemiStory/journal" element={<Journal />}></Route>
        <Route path="/chemiStory/goal" element={<Goal />}></Route>
      </Routes>
    </div>
  );
};

export default ChemiStory;
