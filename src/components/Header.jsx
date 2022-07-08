import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./style/header.css";


const Header = ({ title }) => {
  return (
    <header className="main-header-box">
      <div className="main-header">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
