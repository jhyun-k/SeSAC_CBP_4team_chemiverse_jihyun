import React from 'react';
import styles from './css/pwfind.module.css' 

const PwFind = ({shown, close}) => {
    return shown ? (
        <div className={styles.modal_backdrop} onClick={() => {close();}}>
            <div className={styles.modal_content} onClick={(e) => {e.stopPropagation();}}>
                <h1 className={styles.find}>비밀번호 변경</h1>
                <div className={styles.unit}>
                    <div className={styles.mini_unit}>
                        <label className={styles.label} htmlFor="아이디">아이디</label>
                        <input className={styles.input} type="text" placeholder='아이디를 입력해주세요' name='아이디' />
                    </div>
                    <div className={styles.mini_unit}>
                        <label className={styles.label} htmlFor="현재 비밀번호">현재 비밀번호</label>
                        <input className={styles.input} type="text" placeholder='현재 비밀번호를 입력해주세요' name='현재 비밀번호' />
                    </div>
                    <div className={styles.mini_unit}>
                        <label className={styles.label} htmlFor="변경 비밀번호">변경 비밀번호</label>
                        <input className={styles.input} type="text" placeholder='변경 비밀번호를 입력해주세요' name='변경 비밀번호' />
                    </div>
                    <div className={styles.mini_unit}>
                        <label className={styles.label} htmlFor="비밀번호 확인">비밀번호 확인</label>
                        <input className={styles.input} type="text" placeholder='변경 비밀번호를 한 번 더 입력해주세요' name='비밀번호 확인' />
                    </div>
                    <button className={styles.find_btn} onClick={close}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
};

export default PwFind;