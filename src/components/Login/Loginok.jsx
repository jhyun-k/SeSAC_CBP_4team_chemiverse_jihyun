import React from 'react';
import styles from './css/login.module.css' 
import { useNavigate} from 'react-router-dom'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';



const Loginok = ({setAuth,setIsOpen}) => {

  const navigate = useNavigate()
  
  
  const login = (e) =>{
    e.preventDefault();
    console.log('로그인테스트');
    setAuth(true)
    navigate('/main')
  } 

  const closeModal = ()=> {
    setIsOpen(false);
  }
    return (
        <Modal isOpen={true}>
        <form onSubmit={(e)=>{login(e)}}>
        <div className={styles.modal}>
        <button onClick={()=>{closeModal();setAuth(false)}}>모달 닫기</button>
            <div className={styles.inner}>
                <input className={styles.input} id="id" name="id" placeholder="아이디를 입력해주세요" 
                autoComplete='off'/>
                <input
                  className={styles.input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                <div className={styles.button_box}>
                    <Link to='./idpw' className={styles.loginbtn}>ID/PW찾기</Link>
                    <button type='submit' className={styles.loginbtn}>로그인</button>
                </div>
            </div>
        </div>
        </form>
      </Modal>

    );
};

export default Loginok;