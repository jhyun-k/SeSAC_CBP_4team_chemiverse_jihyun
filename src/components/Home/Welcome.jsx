import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';
import styles from './css/Welcome.module.css';

const Welcome = () => {
  return (
    <div>
      <HomeHeaderNavy />
      <div className={styles.wrap}>
        <div className={styles.welcome}>
          <div className={styles.messageBox}>
            <img
              src={process.env.PUBLIC_URL + '/chemiverse_img/quotes1.png'}
              alt=''
            />
            <div className={styles.message}>
              <p>신입사원 여러분</p>
              <p>환영합니다</p>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/chemiverse_img/quotes.png'}
              alt=''
            />
          </div>
          {/* messageBox */}
          <div className={styles.messageBox2}>
            <p>입사를 진심으로 축하드립니다.</p>
            <p>
              언제나 오늘을 기약하며 당신의 무한한 열정과 가능성으로 끊임없이
              성장하는 인재가 되길 기대합니다.
            </p>
            <p>
              <img
                src={process.env.PUBLIC_URL + '/chemiverse_img/logo2.png'}
                alt=''
              />
            </p>
          </div>
          {/* massagebox2 */}
          <div className={styles.description}>
            <div className={styles.wrap}>
              <p>
                케미버스는 기업에 입사한 신입사원의 안정적 온보딩을 지원하는
                온라인 온보딩 플랫폼입니다.
              </p>
              <p>
                기업에 합격하고, 입사하기 전 Connect with 페이지에서 기업에 대한
                기본 정보와 동기 간 네트워킹을 형성하게 됩니다.
              </p>
              <p>
                On&Up 페이지는 신입사원 교육과 연계된 온라인 플랫폼으로, 입사 후
                사번으로 로그인을 하여 이동이 가능합니다.
              </p>
            </div>
          </div>
        </div>
        {/* welcome */}
      </div>
      {/* wrap */}
    </div>
  );
};

export default Welcome;
