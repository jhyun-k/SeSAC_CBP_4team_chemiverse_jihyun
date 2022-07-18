import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import Welcome from "./components/Home/Welcome";
import Ready from "./components/Home/Ready";
import Introduce from "./components/Home/Introduce";
import HomeNotice from "./components/Home/HomeNotice";
import Loginok from "./components/Login/Loginok";
import { useState, useEffect } from "react";
import FindID from "./components/Login/FindID";
import DetailRedirect from "./components/Login/DetailRedirect";

function App() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const [auth, setAuth] = useState(false);

    useEffect(() => {}, [auth]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/main/*"
                        element={<Main auth={auth} setAuth={setAuth} />}
                    ></Route>
                    <Route
                        path="main/*"
                        element={<DetailRedirect auth={auth} />}
                    />{" "}
                    {/* 대체 어떻게 props를 내릴 수 있단말인가 */}
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/welcome" element={<Welcome />}></Route>
                    <Route path="/introduce" element={<Introduce />}></Route>
                    <Route path="/ready" element={<Ready />}></Route>
                    <Route path="/homenotice" element={<HomeNotice />}></Route>
                    <Route
                        path="/login"
                        element={
                            <Loginok
                                setAuth={setAuth}
                                setIsOpen={setIsOpen}
                                auth={auth}
                            />
                        }
                    ></Route>
                    <Route
                        path="/login/idpw"
                        element={<FindID />}
                        setIsOpen={setIsOpen}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
