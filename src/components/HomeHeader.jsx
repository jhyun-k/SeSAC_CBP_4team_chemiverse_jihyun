import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <div>
        <Link to="/">expert</Link>
      </div>
      <div>Chemiverse Connect With</div>
      <div>
        <Link to="/main">Chemiverse On & Up 바로가기</Link>
      </div>
    </header>
  );
};

export default HomeHeader;
