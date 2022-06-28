import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import Move from "./components/Move";
import Guide from "./components/Guide";
import Diagnosis from "./components/Diagnosis";
import Learning from "./components/Learning";
import Story from "./components/Story";
import Mento from "./components/Mento";
import Post from "./components/Post";
import Mypage from "./components/Mypage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/main/move" element={<Move />}></Route>
          <Route path="/main/guide" element={<Guide />}></Route>
          <Route path="/main/diagnosis" element={<Diagnosis />}></Route>
          <Route path="/main/learning" element={<Learning />}></Route>
          <Route path="/main/story" element={<Story />}></Route>
          <Route path="/main/mento" element={<Mento />}></Route>
          <Route path="/main/post" element={<Post />}></Route>
          <Route path="/main/mypage" element={<Mypage />}></Route>
          <Route path="/main/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
