import React from 'react';
import styles from './css/diagnosis.module.scss' 
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const ResultBefore = () => {

  const chartdata1 = [
    {
      subject: "시간관리",
      A: 39,
    },
    {
      subject: "문서작성",
      A: 43,
    },
    {
      subject: "기획력",
      A: 86,
    },
    {
      subject: "문제해결",
      A: 99,
    },
    {
      subject: "업무수명",
      A: 85,
    },
  ];

  const chartdata2 = [
    {
      subject: "커뮤니케이션",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "팔로워십",
      A: 90,
      B: 20,
      fullMark: 150
    },
    {
      subject: "다양성이해",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "협업마인드",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "갈등관리",
      A: 85,
      B: 90,
      fullMark: 150
    },
  ];

  const chartdata3 = [
    {
      subject: "항목1",
      A: 40,
    },
    {
      subject: "항목2",
      A: 18,
    },
    {
      subject: "항목3",
      A: 86,
    },
    {
      subject: "항목4",
      A: 45,
    },
    {
      subject: "항목5",
      A: 25,
    },
  ];

  const chartdata4 = [
    {
      subject: "항목1",
      A: 94,
    },
    {
      subject: "항목2",
      A: 45,
    },
    {
      subject: "항목3",
      A: 32,
    },
    {
      subject: "항목4",
      A: 56,
    },
    {
      subject: "항목5",
      A: 85,
    },
  ];
  
  
  
  return (

  <div className={styles.resultbefore}>
    <div className={styles.chartcontainer}>
      <div className={styles.chartbox} id="chart1">
        <div className={styles.chartitem}>
        <RadarChart

        outerRadius={50}
        width={225}
        height={225}
        data={chartdata1}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="expert"
          dataKey="A"
          stroke="#FFEFCA"
          fill="#FFEFCA"
          fillOpacity={0.6}
        />
      </RadarChart>
      </div>
      <p className={styles.charttitle}>회사이해 </p>
    </div>
    
    <div className={styles.chartbox} id="chart2">
    <div className={styles.chartitem}>
    <RadarChart
        outerRadius={50}
        width={225}
        height={225}
        data={chartdata2}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="expert"
          dataKey="A"
          stroke="#EEE8AA"
          fill="#EEE8AA"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
    <p className={styles.charttitle}>워크스킬</p>
    </div>


    <div className={styles.chartbox} id="chart3">
    <div className={styles.chartitem}>
    <RadarChart
        outerRadius={50}
        width={225}
        height={225}
        data={chartdata3}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="expert"
          dataKey="A"
          stroke="#D2EDEC"
          fill="#D2EDEC"
          fillOpacity={0.6}
        />
      </RadarChart>
      </div>
      <p className={styles.charttitle}>피플스킬</p>
    </div>

    <div className={styles.chartbox} id="chart4">
          <div className={styles.chartitem}>
    <RadarChart
        outerRadius={50}
        width={225}
        height={225}
        data={chartdata4}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="expert"
          dataKey="A"
          stroke="#D7E0FD"
          fill="#D7E0FD"
          fillOpacity={0.6}
        />
      </RadarChart>
      </div>
      <p className={styles.charttitle}>자기관리</p>
    </div>
      </div> 

    <div className='undercontentsarea'>
      <div className='threecontent'>
        <p> 하위 3개 영역 </p>
        <>
        점수 제일 낮은 애들 나와야 하는데 이거 탭이니... 
        </>
      </div>

    </div>
    </div>
    );
  };

   export default ResultBefore;