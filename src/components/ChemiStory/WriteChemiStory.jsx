import React from "react";

const WriteChemiStory = () => {
  return (
    <div className="WriteChemiStory">
      <h1 className="title">ChemiStory 작성</h1>
      <div className="sub-title">
        <img
          className="chemi-img"
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        <h1>모듈명/활동명</h1>
        <h2>작성 설명 글</h2>
        <div>콘텐츠 기획 후 삽입 예정</div>
        <button 
          className="btn"
        >작성하기</button>
      </div>
    </div>
  );
};

export default WriteChemiStory;
