import React, { useState } from "react";
import LearningModule from "./LearningModule";

const Understand = () => {
    /* 테스트용 데이터!! 나중에 axios나 .. 머 그런걸로 가져와야됨 */
    const module = [
        { id: 1, name: "모듈명1", goal: "학습목표1", basic: "기본개념1" },
        { id: 2, name: "모듈명2", goal: "학습목표2", basic: "기본개념2" },
        { id: 3, name: "모듈명3", goal: "학습목표3", basic: "기본개념3" },
    ];

    const [num, setNum] = useState(0);
    const code = module.filter((data, index) => index === num);
    const fncTab = (e, index) => {
        e.preventDefault();
        setNum(index);
    };

    return (
        <div className="module-area">
            <h1>회사이해</h1>
            <div className="tab-btn">
                {module.map((data, index) => (
                    <button
                        className={index === num ? "btn active" : "btn"}
                        key={data.id}
                        onClick={(e) => {
                            fncTab(e, index);
                        }}
                    >
                        <div className="module" style={{ width: "100px" }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/chemiverse_img/answer-o-on.png`}
                                className="App-logo"
                                alt="React"
                            />
                            <p>{data.name}</p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="tab-contents">
                {code.map((data, index) => (
                    <LearningModule key={data.id} data={data} />
                ))}
            </div>
            {/* <div
                className="module-area"
                style={{ display: "flex", margin: "auto", width: "300px" }}
            >
                <Link to={`./1`}>
                    <div className="module1" style={{ width: "100px" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/chemiverse_img/answer-o-on.png`}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
                <Link to={`./2`}>
                    <div className="module2" style={{ width: "100px" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/chemiverse_img/answer-o-on.png`}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
                <Link to={`./3`}>
                    <div className="module3" style={{ width: "100px" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/chemiverse_img/answer-o-on.png`}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
            </div> */}
        </div>
    );
};

export default Understand;
