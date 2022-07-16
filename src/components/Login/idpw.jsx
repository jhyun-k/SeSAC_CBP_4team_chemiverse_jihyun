import React from 'react';
import styles from './css/idpw.module.css'
import { useState } from 'react'; 
import PwFind from './PwFind';



const IdPw = ({setIsOpen}) => {

    const [modalShown, toggleModal] = useState(false);
    
    return (
        <div className={styles.inner}>
            <div className={styles.main}>
                <div className={styles.mainTxt}>
                  <span>
                    아이디 찾기 / 비밀번호 변경
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
            </div>
            <div className={styles.flex}>
                  <div className={styles.section}>
                  <img className={styles.balloon} src={"/chemiverse_img/bg-gnb-noshadow.png"} alt="balloon"/>
                      <h1 className={styles.find}>아이디 찾기</h1>
                      <div className={styles.unit}>
                          <div className={styles.mini_unit}>
                              <label className={styles.label} htmlFor="이름">이름</label>
                              <input className={styles.input} type="text" placeholder='이름을 입력해주세요' id='이름' />
                          </div>
                          <div className={styles.mini_unit}>
                              <label className={styles.label} htmlFor="전화번호">전화번호</label>
                              <input className={styles.input} type="text" placeholder='전화번호를 입력해주세요'     id='전화번호' />
                          </div>
                          <button className={styles.find_btn}>아이디 찾기</button>
                      </div>
                  </div> {/* 아이디찾기 */}

                  <div className={styles.section}>
                  <img className={styles.balloon} src={"/chemiverse_img/bg-gnb-noshadow.png"} alt="balloon"/>
                      <h1 className={styles.find}>비밀번호 변경</h1>
                      <div className={styles.unit}>
                          <div>
                              <label className={styles.label} htmlFor="아이디">아이디</label>
                              <input className={styles.input}type="text" placeholder='아이디를 입력해주세요' id='아이디' />
                          </div>
                          <div>
                              <label className={styles.label} htmlFor="이름">이름</label>
                              <input className={styles.input} type="text" placeholder='이름을 입력해주세요' id='이름' />
                          </div>
                          <div>
                              <label className={styles.label} htmlFor="전화번호">전화번호</label>
                              <input  className={styles.input}type="text" placeholder='전화번호를 입력해주세요'         id='전화번호' />
                          </div>
                          <button className={styles.find_btn} onClick={() => {toggleModal(true);}}>비밀번호 변경</button>
                      </div>
                  </div> {/* 비밀번호찾기 */}
            </div>
            
            <PwFind shown={modalShown} close={() => {toggleModal(false);}}
        ></PwFind>
        </div>
    );
};

export default IdPw;