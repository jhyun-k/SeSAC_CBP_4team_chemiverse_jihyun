import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Move from "./Move";
import Guide from "./Guide/Guide";
import Diagnosis from "./Diagnosis";
import Learning from "./Learning/Learning";
import Mypage from "./Mypage";
import MainPage from "./MainPage";
import Mentoring from "./Mentoring/Mentoring";
import ChemiStory from "./ChemiStory/ChemiStory";
import PostTab from "./Post/PostTab";
import { useState, useEffect } from "react";
import DetailRedirect from "./Login/DetailRedirect";

const Main = ({ setAuth, auth }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    // const [auth,setAuth] = useState(false)

    // const [auth, setAuth] = useState(false);

    useEffect(() => {
        console.log("로그인인증값", auth);
    }, [auth]);
    return (
        <div className="main">
            <Header auth={auth} setAuth={setAuth} setIsOpen={setIsOpen} />
            <Routes>
                <Route path="main/*" element={<DetailRedirect auth={auth} />} />
                <Route path="/" element={<MainPage />}></Route>
                <Route path="move" element={<Move />}></Route>
                <Route path="guide/*" element={<Guide />}></Route>
                <Route path="diagnosis/*" element={<Diagnosis />}></Route>
                <Route path="learning/*" element={<Learning />}></Route>
                <Route path="chemiStory/*" element={<ChemiStory />}></Route>
                <Route path="mentoring/*" element={<Mentoring />}></Route>
                <Route path="post/*" element={<PostTab />}></Route>
                <Route path="mypage" element={<Mypage />}></Route>

                {/* <Route path="login" element={<Loginok setAuth={setAuth} setIsOpen={setIsOpen} auth={auth}/>  } ></Route>
        <Route path='main/:id' element = {<DetailRedirect auth={auth} />} />
        <Route path='login/idpw' element = {<FindID/>} setIsOpen={setIsOpen}/> */}
            </Routes>
        </div>
    );
};

export default Main;
