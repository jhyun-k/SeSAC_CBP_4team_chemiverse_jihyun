 /* eslint-disable */

 import React from 'react';
 import { useState, useEffect } from 'react';
 import styles from "./css/move.module.css"
 import ClassItem from './ClassItem';
 import axios from 'axios';
 import { CopyToClipboard } from 'react-copy-to-clipboard';
 import data from '../../data/moveData.json';
 import Slider from "react-slick";

 
 
 
 const Move = () => {
/* 
   const [classData, setClassData] = useState([]);

   const dataUrl = '../../data/moveData.json';
  
   useEffect(() => {
     (async () => {
       const response = await axios.get(dataUrl);
       setClassData(response.data);
     })();
   }, []);
  */
const classData = [...data]
console.log('데이터',classData)

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

   return (
 
     <div className={styles.move}>
     <div className={styles.main}>
       <div className={styles.mainTxt}>
         <span>
           교육장 이동 
         </span>
         <span>
           컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글<br></br>
           컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글 컨텐츠 설명글
         </span>
       </div>
       <img
         className={styles.mainImg}
         src={"/chemiverse_img/img-pop-cardnews.png"}
         alt="img-pop-cardnews"
       />
       {/* 교육장 이동 이미지 변경 */}
     </div>
     <div className={styles.moveInner}>
       <div className={styles.platformTitle}>
         <img className={styles.platformLogo} src={"/Moveimg/zoom.webp"} alt="zoom logo"></img>
         <h2>Zoom</h2>
       </div>
       <Slider {...settings}>
       <div className='move_classList'>
       <ul className="class_wrap" >
       {classData.map((classdata) => {return <ClassItem key={classdata.id} classdata={classdata} />})} 
       </ul>
     </div>
     </Slider>
     <div className={styles.platformTitle}>
         <img className={styles.platformLogo} src={"/Moveimg/webex.png"} alt="webex logo"></img>
         <h2>Webex</h2>
       </div>
       <div className='move_classList'>
       <ul className="class_wrap" >
       {classData.map((classdata) => {return <ClassItem key={classdata.id} classdata={classdata} />})} 
       </ul>
     </div>
     <div className={styles.platformTitle}>
         <img className={styles.platformLogo} src={"/Moveimg/gather.webp"} alt="gather logo"></img>
         <h2>Gather</h2>
       </div>
       <div className='move_classList'>
       <ul className="class_wrap" >
       {classData.map((classdata) => {return <ClassItem key={classdata.id} classdata={classdata} />})} 
       </ul>
     </div>
     <div className={styles.platformTitle}>
         <img className={styles.platformLogo} src={"/Moveimg/zep.png"} alt="zep logo"></img>
         <h2>Zep</h2>
       </div>
       <div className='move_classList'>
       <ul className="class_wrap" >
       {classData.map((classdata) => {return <ClassItem key={classdata.id} classdata={classdata} />})} 
       </ul>
     </div>
     </div>
     </div>
 
   );
 };


export default Move;