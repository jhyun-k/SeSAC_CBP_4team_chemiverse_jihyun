import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home';
import Main from "./components/Main";
import Welcome from './components/Home/Welcome';
import Ready from './components/Home/Ready';
import Introduce from './components/Home/Introduce';
import HomeNotice from './components/Home/HomeNotice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main/*" element={<Main />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/ready" element={<Ready />}></Route>
          <Route path="/homenotice" element={<HomeNotice />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
