import React from 'react';
import styles from './css/idpw.module.css';
import { useState } from 'react';
import PwFind from './PwFind';
import Header from '../Header';

const FindID = ({ setIsOpen }) => {
  const [modalShown, toggleModal] = useState(false);
  const [submit,setSubmit]= useState(true);
  const [inputName, setInputName] = useState()
  const [inputTel, setInputTel] = useState()

  const findId = (e) =>{
    e.preventDefault()
    if(inputName === '김제트' && inputTel === '010'){
      alert('입력하신 번호로 아이디가 전송되었습니다.')
      setSubmit(true)
      
    }else{
        setSubmit(false)
        return false
      }
    }

    const onchangeName = (e)=>{
      setInputName(e.currentTarget.value);
    }
    const onchangeTel = (e)=>{
      setInputTel(e.target.value);
    }

  return (
    <div>
      <Header />
    <div className={styles.inner}>
      <div className={styles.main}>
        <div className={styles.mainTxt}>
          <span>아이디 찾기 / 비밀번호 변경</span>
          <span>
            아이디 찾기 및 비밀번호 변경
          </span>
        </div>
        <img
          className={styles.mainImg}
          src={'/chemiverse_img/img-pop-cardnews.png'}
          alt='img-pop-cardnews'
        />
      </div>
      <div className={styles.flex}>
        <div className={styles.section}>
          <img
            className={styles.balloon}
            src={'/chemiverse_img/bg-gnb-noshadow.png'}
            alt='balloon'
          />
          <h1 className={styles.find}>아이디 찾기</h1>
          <div className={styles.unit}>
            <div className={styles.mini_unit}>
              <label className={styles.label} htmlFor='이름'>
                이름
              </label>
              <input
                className={styles.input}
                type='text'
                placeholder='이름을 입력해주세요'
                id='이름'
                onChange={onchangeName} value={inputName|| ''}
              />
            </div>
            <div className={styles.mini_unit}>
              <label className={styles.label} htmlFor='전화번호'>
                전화번호
              </label>
              <input
                className={styles.input}
                type='text'
                placeholder='전화번호를 입력해주세요'
                id='전화번호'
                onChange={onchangeTel} value={inputTel|| ''}
              />
            </div>
            <button className={styles.find_btn} onClick={(e)=>{findId(e)}}>아이디 찾기</button>
            <h5 className={submit===true?`${styles.login_alert}`:`${styles.login_alert_view}`}>입력한 정보가 올바르지 않습니다.</h5>
          </div>
        </div>{' '}
        {/* 아이디찾기 */}
        <div className={styles.section}>
          <img
            className={styles.balloon}
            src={'/chemiverse_img/bg-gnb-noshadow.png'}
            alt='balloon'
          />
          <h1 className={styles.find}>비밀번호 변경</h1>
          <div className={styles.unit}>
            <div>
              <label className={styles.label} htmlFor='아이디'>
                아이디
              </label>
              <input
                className={styles.input}
                type='text'
                placeholder='아이디를 입력해주세요'
                id='아이디'
              />
            </div>
            <div>
              <label className={styles.label} htmlFor='이름'>
                이름
              </label>
              <input
                className={styles.input}
                type='text'
                placeholder='이름을 입력해주세요'
                id='이름'
              />
            </div>
            <div>
              <label className={styles.label} htmlFor='전화번호'>
                전화번호
              </label>
              <input
                className={styles.input}
                type='text'
                placeholder='전화번호를 입력해주세요'
                id='전화번호'
              />
            </div>
            <button
              className={styles.find_btn}
              onClick={() => {
                toggleModal(true);
              }}
            >
              비밀번호 변경
            </button>
          </div>
        </div>{' '}
        {/* 비밀번호찾기 */}
      </div>

      <PwFind
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      ></PwFind>
    </div>
    </div>
  );
};

export default FindID;
