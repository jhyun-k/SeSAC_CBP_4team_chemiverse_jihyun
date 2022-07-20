import React from "react";
import DiagnosisNav from "./DiagnosisNav";
import { useState } from "react";
import Result from "./Result";

const Diagnosis = () => {
  return (
    <div>
      <h2>진단</h2>
      <DiagnosisNav />
      <Result />
    </div>
  );
};

export default Diagnosis;
