import React from "react";
import { NavLink } from "react-router-dom";

const ChemiNav = () => {
  const chemiNavList = [
    { content: "ChemiStory란?", href: "." },
    { content: "ChemiStory 작성", href: "./writeChemiStory" },
    { content: "성찰저널", href: "./journal" },
    { content: "자기개발목표", href: "./goal" },
  ];
  return (
    <div className="ChemiNav">
      <nav className="nav">
        <ul>
          {chemiNavList.map((element, index) => {
            return (
              <li className="navbtn" key={index}>
                <NavLink to={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ChemiNav;
