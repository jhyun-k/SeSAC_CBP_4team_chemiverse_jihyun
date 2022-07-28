import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Welcome from "./components/Home/Welcome";
import Ready from "./components/Home/Ready";
import Introduce from "./components/Home/Introduce";
import HomeNotice from "./components/Board/HomeNotice";
import Loginok from "./components/Login/Loginok";
import FindID from "./components/Login/FindID";
import DetailRedirect from "./components/Login/DetailRedirect";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [auth, setAuth] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  useEffect(() => {}, [auth]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='main/*' element = {<DetailRedirect auth={auth}/>} />
        <Route path="/main/*" element={<Main auth={auth} setAuth={setAuth} />}></Route>
         {/* 대체 어떻게 props를 내릴 수 있단말인가 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/ready" element={<Ready />}></Route>
        <Route path="board/notice" element={<HomeNotice />}></Route>
        <Route path="/login" element={<Loginok setAuth={setAuth} setIsOpen={setIsOpen} auth={auth}/>} ></Route>
        <Route path='/login/idpw' element = {<FindID/>} setIsOpen={setIsOpen}/>
        </Routes>
      </BrowserRouter>
      {/* <button>top</button> */}
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop}
      >
        <IoIosArrowDropupCircle size="50px" color="#6f76c1" />
      </button>
    </div>
  );
}
export default App;
