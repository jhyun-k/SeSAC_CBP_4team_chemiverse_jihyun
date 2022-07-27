import React from 'react';
// import MoveDate from "./../../data/moveData.json"
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from "./css/move.module.css"
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
        <img  className={styles.move_class_img} src={classdata.moveClassImg}/>
        <dl>
           <dt className={styles.classname}>{classdata.moveClassName}</dt>
           <dd className={styles.classinfotitle}>교육 일정 : 
           <span className={styles.classinfo}>{classdata.moveClassDate}</span> </dd>
           <dd className={styles.classinfotitle}> 교육 시간 : 
           <span className={styles.classinfo}> {classdata.moveClassTime}</span></dd>
        </dl>

        <div className={styles.buttonarea}>
            <span className={styles.url} ref={link}>
             {classdata.moveClassUrl}
            </span>
            <botton className={styles.copybutton} onClick={toClipboard}>
              {isCopied ? <BsFillCheckCircleFill/>  : <AiOutlineShareAlt/>}
            </botton>
 
          {isCopied && <h2 className={styles.urlcopy}>URL 복사 완료! </h2>}
    

        <button className={styles.button}><a href={classdata.moveClassUrl}>바로가기</a></button>
        </div>
        </li>


  );
};

export default ClassItem;
