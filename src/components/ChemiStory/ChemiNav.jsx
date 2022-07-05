import React from "react";
import { NavLink } from "react-router-dom";

const ChemiNav = () => {
  const chemiNavList = [
    { content: "ChemiStory란?", href: "/main/chemiStory" },
    { content: "ChemiStory 작성", href: "/main/chemiStory/writeChemiStory" },
    { content: "성찰저널", href: "/main/chemiStory/Journal" },
    { content: "자기개발목표", href: "/main/chemiStory/Goal" },
  ];
  return (
    <div>
      <nav className="nav">
        <ul>
          {chemiNavList.map((element, index) => {
            return (
              <li key={index}>
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
