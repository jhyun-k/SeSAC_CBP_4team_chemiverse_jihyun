import React from 'react';
import { NavLink } from "react-router-dom";

const DiagnosisNav = () => {
  const DiagnosisNavList  = [
    {content: "현재상태 점검하기", href:"."},
    {content: "진단결과 보기", href:"./result"}
  ];

  return (
    <div>
      <nav className='diaNav'>
        <ul>
          {DiagnosisNavList.map((element, index)=>{
            return(
              <li key={index}>
                <NavLink to={element.href}>{element.content}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
};

export default DiagnosisNav;