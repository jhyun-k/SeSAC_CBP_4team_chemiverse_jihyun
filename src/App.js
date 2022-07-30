import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Welcome from "./components/Home/Welcome";
import Ready from "./components/Home/Ready";
import Introduce from "./components/Home/Introduce";
import Loginok from "./components/Login/Loginok";
import FindID from "./components/Login/FindID";
import DetailRedirect from "./components/Login/DetailRedirect";
import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [auth, setAuth] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="main/*" element={<DetailRedirect auth={auth} />} />
          <Route
            path="/main/*"
            element={<Main auth={auth} setAuth={setAuth} />}
          ></Route>
          {/* 대체 어떻게 props를 내릴 수 있단말인가 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/ready" element={<Ready />}></Route>
          <Route path="/board/*" element={<Board />}></Route>
          <Route
            path="/login"
            element={
              <Loginok setAuth={setAuth} setIsOpen={setIsOpen} auth={auth} />
            }
          ></Route>
          <Route
            path="/login/idpw"
            element={<FindID />}
            setIsOpen={setIsOpen}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"}
        onClick={handleTop}
      >
        <IoIosArrowDropupCircle size="50px" color="#6f76c1" />
      </button>
    </div>
  );
}
export default App;
