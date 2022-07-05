import React from "react";
import WriteChemiStory from "./WriteChemiStory";
import Journal from "./Journal";
import Goal from "./Goal";
import ChemiNav from "./ChemiNav";
import { Routes, Route } from "react-router-dom";
import WhatIsChemiStory from "./WhatIsChemiStory";

const ChemiStory = () => {
  return (
    <div>
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
