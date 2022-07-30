import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';
import { BsCheckLg } from "react-icons/bs";
import styles from './css/Introduce.module.css'

const Introduce = () => {
    return (
        <div>
            <HomeHeaderNavy />
            <div className={styles.inner}>
            <div className={styles.title}>
		  		<div className={styles.title_inner}>	
      			<h1>회사소개</h1>
				  <p>합격을 진심으로 축하드립니다.<br/> 엑스퍼트 컨설팅에 대해 알아봅시다.</p>
				</div>
            </div>
            <div className={styles.company_info}>
            <p className={styles.pin}><BsCheckLg /><strong className={styles.tit}>일반현황
						 </strong></p>
            <div className={styles.videoBox}>
                <div className={styles.contentBox}>
                    <div className={styles.name_meaning}>
                        <h1>Excellence & PERformance & Transformation</h1>
                        <p>엑스퍼트컨설팅은 우리나라 기업교육의 발전에 뜻을 같이하는 컨설턴트, 전문강사, HR 전문가들의 공동출자로 설립하여국내조직의 경영혁신 및 인재육성의 엑설런스 추구를 위한 여러 영역별 사업 활동을 전개해 오고 있습니다.</p>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.info_left}>
                        <div className={styles.info}>
                            <div className={styles.bullet}>회사명</div>
                            <div className={styles.text}>엑스퍼트컨설팅</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.bullet}>설립연도</div>
                            <div className={styles.text}>1994년 6월</div>
                        </div>
                        </div>
                        <div className={styles.info_right}>
                        <div className={styles.info}>
                            <div className={styles.bullet}>사업내용</div>
                            <div className={styles.text}>채용컨설팅,NCS,진단평가,집체교육</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.bullet}>임직원수</div>
                            <div className={styles.text}>211명</div>
                        </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/XFc-p5Rw8Ao" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>
            <div className={styles.value}>
            <p className={styles.pin}><BsCheckLg /><strong className={styles.tit}>가치체계
						 </strong></p>
                <div className={styles.value_img}>
                <img src="/chemiverse_img/introduce_img_squre.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Introduce;