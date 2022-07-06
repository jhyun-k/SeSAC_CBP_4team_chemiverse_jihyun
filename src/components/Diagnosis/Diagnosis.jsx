import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiagnosisNav from './DiagnosisNav';
import PresentState from './PresentState';
import DiagnosisResult from './DiagnosisResult';

const Diagnosis = () => {
  return (
    <div>
      <h2>진단</h2>
      <p> 컨텐츠 설명글 </p>
      <DiagnosisNav/>
      <Routes>
      <Route path="/" element={<PresentState />}></Route>
      <Route path="result" element={<DiagnosisResult />}></Route>
      </Routes>    
    </div>
  );
};

export default Diagnosis;