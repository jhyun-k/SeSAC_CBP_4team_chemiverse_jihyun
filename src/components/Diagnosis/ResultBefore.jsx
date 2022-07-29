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
          stroke="#fad172"
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
          stroke="#f0e890"
          fill="#f9f3ae"
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
          stroke="#8cedea"
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
          stroke="#aabdfb"
          fill="#D7E0FD"
          fillOpacity={0.6}
        />
      </RadarChart>
      </div>
      <p className={styles.charttitle}>자기관리</p>
    </div>
      </div> 

    <div className={styles.undercontentsarea}>
      <div className={styles.threeContent}>
        <h2 className={styles.threeOfAllTitle}> 전체 영역 - 하위 3개 항목 </h2>
        <p className={styles.threeOfAllDes}>
        앞선 진단 테스트 결과를 기준으로 <br/>
        전체 영역 중 하위 3개 항목이 표시됩니다. <br/>
        <span className={styles.AllDesNotice}>테스트 결과를 바탕으로 현재 상황을 파악 및 보완하기 위한 목적입니다.
        </span>
        </p>
        <div className={styles.threeOfAllItemBox}>
            <div className={styles.threeaOfAllItem}>
              <p className={styles.itemNumber}> 01 </p>
              <h4 className={styles.itemDes}>워크스킬 - 다양성 이해</h4>
              <p className={styles.itemHelp}> 이 영역의 이 부분은 뫄뫄 페이지에서 
                <br/> 이렇게 공부하면 보완에 도움이 됩니다. </p>
              <p className={styles.itemNumber}> 02 </p>
              <h4 className={styles.itemDes}>피플스킬 - 해당 항목 </h4>
              <p className={styles.itemHelp}> 이 영역의 이 부분은 뫄뫄 페이지에서 
                <br/> 이렇게 공부하면 보완에 도움이 됩니다. </p>
              <p className={styles.itemNumber}> 03 </p>
              <h4 className={styles.itemDes}> 자기관리 - 해당 항목 </h4>
              <p className={styles.itemHelp}> 이 영역의 이 부분은 뫄뫄 페이지에서 
                <br/> 이렇게 공부하면 보완에 도움이 됩니다. </p>
            </div>
        </div>
      </div>

    </div>
    </div>
    );
  };

   export default ResultBefore;