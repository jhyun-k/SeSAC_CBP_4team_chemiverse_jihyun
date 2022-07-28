import React from 'react';
import styles from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.addressBox}>
          <p>
            (주)엑스퍼팅컨설팅 대표이사 김정문 사업자등록번호 116-81-48332
            우)05718 서울특별시 송파구 중대로 121 롯데캐슬파인힐 2F
          </p>
          <p>
            Tel. <span>02)538-2221 </span>/ Fax. <span>02)538-6996 </span>/
            E-mail:
            <span>help@exc.co.kr</span> / 개인정보관리책임자 김세환
          </p>
        </div>
        <div className={styles.brandImgBox}>
          <ul>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + '/chemiverse_img/footer-mark-1.png'
                }
                alt=''
              />
            </li>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + '/chemiverse_img/footer-mark-2.png'
                }
                alt=''
              />
            </li>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + '/chemiverse_img/footer-mark-3.png'
                }
                alt=''
              />
            </li>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + '/chemiverse_img/footer-mark-4.png'
                }
                alt=''
              />
            </li>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + '/chemiverse_img/footer-mark-5.png'
                }
                alt=''
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
