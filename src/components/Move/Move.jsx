import React from 'react';
import "./css/move.css";
import classData from "../../data/moveData.json";
import { CopyToClipboard } from 'react-copy-to-clipboard';




const Move = () => {
  return(
    <>
      <div className="titleArea">
        <h1>교육장 이동</h1>
        <p>컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 컨텐츠 영역 </p>
      </div>

      
      <div className="itemContainer">
        <div className="contentTitle">
          <h2>Zoom</h2>
        </div>
        <div className="itemBox">
        {
          classData.map((classData) => {
            return(
            <div className="item">
              <div className="itemImg"></div>
              <div className="itemTitleBox">
                <div className="itemTitleLeft">
                  <h3 className="classTitle">{classData.classRoomName}</h3>
                  <p>교육일정 : <span>{classData.classRoomDate}</span></p>
                  <p>교육시간 : <span>{classData.classRoomTime}</span></p>
                </div>
                <div className="itemTitleRight">
                  <button className="classRoomButton">바로가기</button>
                  <button className="classRoomButton">URL복사</button>
                </div>
              </div>
            </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default Move;