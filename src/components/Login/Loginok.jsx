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

  const closeModal = (e)=> {
    e.preventDefault()
    setAuth(false);
    navigate('/main')
  }
    return (
        <Modal isOpen={true} 
        style={{
          overlay: {
          backgroundColor: '#787a8eaa',
            
          },
            content: {
              width: '50vw',
              height: '60vh',
              margin: 'auto',
              border: '1px solid blue;',
              borderRadius: '20px',
              padding: 0
            }}}>
       <button onClick={(e)=>closeModal(e)} className={styles.close} type='button'>X</button>
        <form onSubmit={(e)=>{login(e)}}>
        <div className={styles.modal}>
    
        <h1 className={styles.logo}>로고</h1>
          <p className={styles.text}>신규입사자웅앵웅 환영해요~~! 환영합니다 환영합니다 극도로 환영 짱짱환영 </p>
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