import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';
import styles from './css/Ready.module.css'
import { BsCheckLg } from "react-icons/bs";

const Ready = () => {

	const fncSubmit = () => {
		alert('제출되었습니다!!!')
	}
    return (
        <div>
            <HomeHeaderNavy />
			<div className={styles.title}>
			{/* <img
          className={styles.img}
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"/>  */}
		  <div className={styles.title_inner}>	
      		<h1>입사 전 준비사항</h1>
			  <p>합격을 진심으로 축하드립니다.<br/> 체크리스트를 활용하여 입사에 필요한 사항을 체크해봅시다.</p>
			  </div>
			  
			</div>
			<div className={styles.inner}>
            <form className={styles.form} action="" name="" onSubmit={fncSubmit}>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Checklist</legend>
						<div className={styles.checklist}>
                         <div className={styles.checklist_conbox}>
						 <p className={styles.pin}><BsCheckLg /><strong className={styles.tit}>신체검사
						 </strong><span>※ 경력 신규입사자의 경우, 별도 프로세스로 진행</span></p>

						 <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk1" name="" className={styles.checkbox}/>
			                     <label htmlFor="chk1"><strong>신체검사 확인증</strong></label>
			                </div>

			                <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk2" name="" className={styles.checkbox}/>
			                     <label htmlFor="chk2"><strong>채용 증명서</strong></label>
			                </div>
							<div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk3" name="" className={styles.checkbox}/>
			                     <label htmlFor="chk3"><strong>건강검진 소견서</strong></label>
			                </div>
							<div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk4" name="" className={styles.checkbox}/>
			                     <label htmlFor="chk4"><strong>신분증</strong></label>
			                </div>

							
                        </div>
                            <div className={styles.checklist_conbox}>
							<p className={styles.pin}><BsCheckLg /><strong className={styles.tit}>인사정보 등록 서류 준비
							</strong><span>※ 스캔 후 파일로 준비</span></p>
							
			                    

			                <div className={styles.checkbox_wrap}>
			                	<input type="checkbox" id="chk5" name=""  className={styles.checkbox}/>
			                    <label htmlFor="chk5"><strong>증명사진</strong></label>
			                </div>

			                <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk6" name="" className={styles.checkbox}/>
			                    <label htmlFor="chk6"><strong>가족관계 증명서</strong></label>
			                </div>

			                <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk7" name="" className={styles.checkbox}/>
			                    <label htmlFor="chk7"><strong>자격증/경력증명서</strong></label>
			                </div>

			                <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk8" name="" className={styles.checkbox}/>
			                    <label htmlFor="chk8"><strong>졸업/학위증명서</strong> <span>(졸업예정증명서)</span></label>
			                </div>

			                {/* <div className={styles.checkbox_wrap}>
			                    <input type="checkbox" id="chk7" name=""/>
			                    <label for="chk7"><strong>병적증명서</strong> <span>주민센터 방문/무인발급기/인터넷 발급 신청</span>
			                    <span>(대법원 전자가족관계등록 시스템, 민원 24시)</span></label>
			                </div> */}
			                </div>
                            
			            </div>
						<div className={styles.btn_wrap}>
			                 <button type="submit" className={styles.btn_submit}>확인</button>
			                </div>
			    </fieldset>
			</form>
			</div>
        </div>
    );
};

export default Ready;