import React from 'react';
import styles from './css/login.module.css' 
import { useNavigate} from 'react-router-dom'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Header from './../Header';
import MainPage from './../MainPage';
import { useState } from 'react';



const Loginok = ({setAuth,setIsOpen,auth}) => {

  const navigate = useNavigate()
  const login = (e) =>{
    e.preventDefault()
    if(inputId === 'expert' && inputPw === 'password'){
      setSubmit(true)
    console.log('로그인테스트',{auth});
    setAuth(true)
    navigate('/main')
}else{
    setSubmit(false)
    return false
}}

  const closeModal = (e)=> {
    e.preventDefault()
    setAuth(false);
    navigate('/main')
  }
  const [inputId, setInputId] = useState()
  const [inputPw, setInputPw] = useState()
  const [submit,setSubmit]= useState(true)

const onchangeId = (e)=>{
  setInputId(e.currentTarget.value);
}
const onchangePw = (e)=>{
  setInputPw(e.target.value);
}
    return (
      <div>
        <Header />
        <MainPage />
        <Modal isOpen={true} className={styles.Modal} overlayClassName={styles.Overlay} appElement={document.getElementById('root') || undefined}>
       <button onClick={(e)=>closeModal(e)} className={styles.close} type='button'>X</button>
        <form onSubmit={(e)=>{login(e)}}>
        <div className={styles.modal}>
        <h1 className={styles.logo}>로고</h1>
          <p className={styles.text}>신규입사자 여러분 환영합니다. 로그인 후 온보딩 프로그램을 진행해주세요. </p>
          <img src="/chemiverse_img/cloudpeople.png" alt="cloudpeople" className={styles.cloudpeople} />
            <div className={styles.inner}>
            <span className={styles.login_txt}>LOGIN</span>
                <input className={styles.input} id="id" name="id" placeholder="아이디를 입력해주세요" 
                autoComplete='off' required onChange={onchangeId} value={inputId|| ''} />
                <input
                  className={styles.input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  required
                  onChange={onchangePw} value={inputPw|| ''}
                  
                />
                <div className={styles.button_box}>
                <button type='submit' className={styles.loginbtn}>로그인</button>
                <Link to='./idpw' className={styles.loginbtn}>ID/PW찾기</Link>
                </div>
                <div >
                  <h5 className={submit===true?`${styles.login_alert}`:`${styles.login_alert_view}`}>아이디 혹은 비밀번호가 맞지 않습니다</h5>
                </div>
            </div>
        </div>
        </form>

      </Modal>
      </div>
    );
};

export default Loginok;