import React from 'react';
import styles from './css/diagnosis.module.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {TbArrowBigDownLine} from 'react-icons/tb';



const ResultAfter = () => {{
  const resultofbefore = [
    {
      name: "회사이해",
      underscore1: 1000,
      underscore2: 2000,
      underscore3: 1111,
    },
    {
      name: "워크스킬",
      underscore1: 500,
      underscore2: 1398,
      underscore3: 2000,
    },
    {
      name: "피플스킬",
      underscore1: 1500,
      underscore2: 1398,
      underscore3: 1800,
    },
    {
      name: "자기관리",
      underscore1: 1500,
      underscore2: 600,
      underscore3: 500,
    },
  
  ];

  const resultofafter = [
    {
      name: "회사이해",
      underscore1: 1000,
      underscore2: 2000,
      underscore3: 2000,
    },
    {
      name: "워크스킬",
      underscore1: 2500,
      underscore2: 1598,
      underscore3: 2000,
    },
    {
      name: "피플스킬",
      underscore1: 1800,
      underscore2: 1598,
      underscore3: 1900,
    },
    {
      name: "자기관리",
      underscore1: 2000,
      underscore2: 1000,
      underscore3: 1000,
    },
  
  ];

  
; 
  return (
    <div className={styles.resutlAfterContainer}>
      <div className={styles.afterResult}>
        <h2 className={styles.resultChartName}>사전진단 결과</h2>
        <div className={styles.beforeChart}>
 <BarChart
      width={500}
      height={300}
      data={resultofbefore}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     {/*  <CartesianGrid/> */}
  {    <XAxis dataKey="name" />}
   {/*    <YAxis /> */}
      <Tooltip /> 
    {/*   <Legend /> */}
      <Bar dataKey="underscore1" fill="#FFEFCA" background={{ fill: "#f1eaea" }} />
      <Bar dataKey="underscore2" fill="#D2EDEC"
      background={{ fill: "#efebeb" }}  />
      <Bar dataKey="underscore3" fill="#82ca9d"
      background={{ fill: "#e5e5e5" }}  />
    </BarChart>
    </div>
    </div> 


    <TbArrowBigDownLine className={styles.arrowIcon}/>


    <div className='beforeResult'>
        <h2 className={styles.resultChartName}>사후진단 결과</h2>
        <div className={styles.afterChart}>
 <BarChart
      width={500}
      height={300}
      data={resultofafter}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
  {    <XAxis dataKey="name"  className={styles.scoreName}/>}
   {/*    <YAxis /> */}
      <Tooltip /> 
    {/*   <Legend /> */}
      <Bar dataKey="underscore1" fill="#f7d27d"  background={{ fill: "#e5e5e5" }} />
      <Bar dataKey="underscore2" fill="#6bc1be" 
       background={{ fill: "#e5e5e5" }}/>
      <Bar dataKey="underscore3" fill="#589770"
       background={{ fill: "#e5e5e5" }} />
    </BarChart>
    </div>
    </div> 


    </div>
  );
  }
}

export default ResultAfter;