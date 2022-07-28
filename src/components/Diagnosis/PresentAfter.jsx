import React from 'react';
import styles from './css/diagnosis.module.scss'
import { useState } from 'react';
import { RiQuestionnaireFill } from "react-icons/ri";


const PresentAfter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const preSave=()=>{
    alert('임시저장 되었습니다.')
  }
  const [disable, setDisable] = React.useState(false);
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  
  
  return (
    <div className={styles.presentBefore}>
      <div className={styles.testHeader}>
        <div className={styles.testDesBox}>
        <h1 className={styles.testTitle}>사후 점검 Test</h1>
        <p className={styles.testdes}> 본 진단은 사전 진단과 같은 내용으로 <br/>
        교육 전 후의 역량 차이를 파악하기 위한 사후 진단 테스트입니다.
       </p>
        <p className={styles.testinfo}> * 제출 후에는 수정이 불가능하니
        <br/> 
        진단에 임하는 모든 웅앵은 웅앵해주시길 바랍니다.</p>
        </div>
         <img
          className={styles.diaTestHeaderAfreImg}
          src={"/DiagnosisImg/image5.jpeg"}
          alt="test-header-img"
        /> 
      </div>

      <div className={styles.formArea}>

        <form onSubmit={handleSubmit}>
            <legend className={styles.testName}> 사후 점검 진단 문항 </legend>

            <div className={styles.questionbox}>
              
              <div>
              <h4 className={styles.questionTitle} htmlFor='question1'>
              <span className={styles.titleNumber}><RiQuestionnaireFill/> </span>  1번 문항이 이곳에 들어갑니다.
              </h4>
              </div>

              <div>
              <input type="radio" name="answer1" value="1" id="q1a1"></input>
              <label htmlFor='q1a1'> <span>1번 첫번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer1" value="2" id="q1a2"></input>
              <label htmlFor='q1a2'> <span>1번 두번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer1" value="3" id="q1a3"></input>
              <label htmlFor='q1a3'> <span>1번 세번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer1" value="4" id="q1a4"></input>
              <label htmlFor='q1a4'> <span>1번 네번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              </div>
            </div>

            <div className={styles.questionbox}>
              <div>
              <h4 className={styles.questionTitle} htmlFor='question2'>
              <span className={styles.titleNumber}><RiQuestionnaireFill/> </span>  2번 문항이 이곳에 들어갑니다.
              </h4>
              </div>

              <div>
              <input type="radio" name="answer2" value="1" id="q2a1"></input>
              <label htmlFor='q2a1'> <span>2번 첫번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer2" value="2" id="q2a2"></input>
              <label htmlFor='q2a2'> <span>2번 두번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer2" value="3" id="q2a3"></input>
              <label htmlFor='q2a3'> <span>2번 세번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer2" value="4" id="q2a4"></input>
              <label htmlFor='q2a4'> <span>2번 네번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              </div>
            </div>

            <div className={styles.questionbox}>
              <div>
              <h4 className={styles.questionTitle} htmlFor='question3'>
              <span className={styles.titleNumber}><RiQuestionnaireFill/> </span>  3번 문항이 이곳에 들어갑니다.
              </h4>
              </div>

              <div>
              <input type="radio" name="answer3" value="1" id="q3a1"></input>
              <label htmlFor='q3a1'> <span>3번 첫번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer3" value="2" id="q3a2"></input>
              <label htmlFor='q3a2'> <span>3번 두번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer3" value="3" id="q3a3"></input>
              <label htmlFor='q3a3'> <span>3번 세번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer3" value="4" id="q3a4"></input>
              <label htmlFor='q3a4'> <span>3번 네번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              </div>
            </div>

            <div className={styles.questionbox}>
              
              <div>
              <h4 className={styles.questionTitle} htmlFor='question4'>
              <span className={styles.titleNumber}><RiQuestionnaireFill/> </span>  4번 문항이 이곳에 들어갑니다.
              </h4>
              </div>

              <div>
              <input type="radio" name="answer4" value="1" id="q4a1"></input>
              <label htmlFor='q4a1'> <span>4번 첫번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer4" value="2" id="q4a2"></input>
              <label htmlFor='q4a2'> <span>4번 두번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer4" value="3" id="q4a3"></input>
              <label htmlFor='q4a3'> <span>4번 세번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              <input type="radio" name="answer4" value="4" id="q4a4"></input>
              <label htmlFor='q4a4'> <span>4번 네번째 보기가 이곳에 들어갑니다.  
              </span> </label>
              </div>
            </div>



            <div className={`${styles.questionbox} ${styles.textbox}`}>
            <div>
            <h4 className={styles.questionTitle}  htmlFor='question5'>
            <span className={styles.titleNumber}><RiQuestionnaireFill/> </span> 5번 문항이 이곳에 들어갑니다.  
            </h4>
            </div>

            <div>
            <label>
            <input type="text"
            id="question5"
            placeholder="답안을 입력해주세요"
            value={question5}
            onChange={(e)=>{setQuestion5(e.target.value)}}/>
            </label>
            </div>
            </div>
            
            <div className={`${styles.questionbox} ${styles.textbox}`}>

            <div>
            <h4 className={styles.questionTitle} htmlFor='question6'>
            <span className={styles.titleNumber}><RiQuestionnaireFill/> </span> 6번 문항이 이곳에 들어갑니다.  
            </h4>
            </div>
            
            <div>
            <label>
            <input type="text"
            id="question6"
            value={question6}
            placeholder="답안을 입력해주세요"
            onChange={(e)=>{setQuestion6(e.target.value)}}/>
            </label>
            </div>
          
          </div>

          <div className={styles.infomesage}>
           * 본 진단은 제출 후 수정이 불가능합니다. 제출 전 다시 한 번 확인해주세요.
          </div>

        <button className={styles.formbutton}onClick={preSave}>임시저장</button>

        <button className={styles.formbutton} 
        disabled=""  onClick={(e)=>{

	      alert('수고하셨습니다 :) ');
	      e.currentTarget.disabled = true ;}}>제출하기</button>
        </form>
      </div>
    </div>
  );
};
;

export default PresentAfter;