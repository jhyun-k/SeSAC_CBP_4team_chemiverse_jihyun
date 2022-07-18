import React from 'react';
// import MoveDate from "./../../data/moveData.json"
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from "./css/classitem.module.css"
import { useState,useRef } from 'react';


const ClassItem = ({classdata}) => {
  const link = useRef();
  const [isCopied, setIsCopied] = useState(false);

  const toClipboard = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(link.current.innerHTML);
      setIsCopied(true);
    }
  };
  

  return (

              <li className={styles.itemboxs}>
        <img src={classdata.moveClassImg}/>
        <dl>
           <dt>{classdata.moveClassName}</dt>
           <dd>교육 일정 : {classdata.moveClassDate}</dd>
           <dd>교육 시간 : {classdata.moveClassTime}</dd>
        </dl>


            <span className="url" ref={link}>
              {window.location.href}
            </span>
            <span className="copy" onClick={toClipboard}>
              {isCopied ? <BsFillCheckCircleFill/> : <AiOutlineShareAlt />}
            </span>
 
          {isCopied && <h2>복사되었습니다!</h2>}
    

        <button><a href="www.naver.com">바로가기</a></button>
{/*         {
        success ? 
        <div style={{color:'green'}}>
          URL이 복사되었습니다.
        </div> : null
      } */}
        </li>


  );
};

export default ClassItem;
