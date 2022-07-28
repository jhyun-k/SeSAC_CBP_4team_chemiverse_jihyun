import React from 'react';
import styles from './css/login.module.css' 
import { useNavigate} from 'react-router-dom'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Header from './../Header';
import MainPage from './../MainPage';



const Loginok = ({setAuth,setIsOpen,auth}) => {

  const navigate = useNavigate()
  
  
  const login = (e) =>{
    e.preventDefault();
    console.log('로그인테스트',{auth});
    setAuth(true)
    navigate('/main')

  } 

  const closeModal = (e)=> {
    e.preventDefault()
    setAuth(false);
    navigate('/main')
  }
    return (
      <div>
        <Header />
        <MainPage />
        <Modal isOpen={true} 
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        /* style={{
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
            }}} */>
       <button onClick={(e)=>closeModal(e)} className={styles.close} type='button'>X</button>
        <form onSubmit={(e)=>{login(e)}}>
        <div className={styles.modal}>
    
        <h1 className={styles.logo}>로고</h1>
          <p className={styles.text}>신규입사자 여러분 환영합니다. 로그인 후 온보딩 프로그램을 진행해주세요. </p>
          <img src="/chemiverse_img/cloudpeople.png" alt="cloudpeople" className={styles.cloudpeople} />
            <div className={styles.inner}>
            <span className={styles.login_txt}>LOGIN</span>
                <input className={styles.input} id="id" name="id" placeholder="아이디를 입력해주세요" 
                autoComplete='off' required />
                <input
                  className={styles.input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  required
                />
                <div className={styles.button_box}>
                <button type='submit' className={styles.loginbtn}>로그인</button>
                    <Link to='./idpw' className={styles.loginbtn}>ID/PW찾기</Link>
                </div>
            </div>
        </div>
        </form>

      </Modal>
      </div>
    );
};

export default Loginok;