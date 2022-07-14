import React from 'react';
import Modal from 'react-modal';
import styles from './css/idpw.module.css' 



const IdPw = ({setIsOpen}) => {

    function openModal() {
        setIsOpen(true);
      }

      const closeModal = ()=> {
        setIsOpen(false);
      }
    return (
        <div className='inner'>
            <div>
                <h1>아이디 찾기</h1>
                <label htmlFor="이름">이름</label>
                <input type="text" placeholder='이름을 입력해주세요' name='이름' />
                <label htmlFor="전화번호">전화번호</label>
                <input type="text" placeholder='전화번호를 입력해주세요' name='전화번호' />
            </div>
            <button>아이디 찾기</button>
            <div>
                <h1>비밀번호 찾기 찾기</h1>
                <label htmlFor="아이디">아이디</label>
                <input type="text" placeholder='아이디를 입력해주세요' name='아이디' />
                <label htmlFor="이름">이름</label>
                <input type="text" placeholder='이름을 입력해주세요' name='이름' />
                <label htmlFor="전화번호">전화번호</label>
                <input type="text" placeholder='전화번호를 입력해주세요' name='전화번호' />
            </div>
            <button>비밀번호 변경</button>
            {/* <Modal isOpen={true}>
            <h1>비밀번호 변경</h1>
                <label htmlFor="아이디">아이디</label>
                <input type="text" placeholder='아이디를 입력해주세요' name='아이디' />
                <label htmlFor="현재 비밀번호">현재 비밀번호</label>
                <input type="text" placeholder='현재 비밀번호를 입력해주세요' name='현재 비밀번호' />
                <label htmlFor="변경 비밀번호">변경 비밀번호</label>
                <input type="text" placeholder='변경 비밀번호를 입력해주세요' name='변경 비밀번호' />
                <label htmlFor="비밀번호 확인">비밀번호 확인</label>
                <input type="text" placeholder='변경 비밀번호를 한 번 더 입력해주세요' name='비밀번호 확인' />
                <button onClick={()=>closeModal}>비밀번호 변경</button>
            </Modal> */}
        </div>
    );
};

export default IdPw;