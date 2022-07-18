import React, { useState } from "react";
import LearningModule from "./LearningModule";
import { Link } from "react-router-dom";

const Understand = () => {
    /* 테스트용 데이터!! 나중에 axios나 .. 머 그런걸로 가져와야됨 */
    const module = [
        {
            id: 1,
            name: "모듈명1",
            goal: "학습목표1",
            basic: "기본개념1",
            img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            name: "모듈명2",
            goal: "학습목표2",
            basic: "기본개념2",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 3,
            name: "모듈명3",
            goal: "학습목표3",
            basic: "기본개념3",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        // { id: 4, name: "모듈명3", goal: "학습목표3", basic: "기본개념3" },
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
                        <div className="module">
                            <div className="img-box">
                                <img
                                    src={data.img}
                                    className="App-logo"
                                    alt="React"
                                />
                            </div>
                            <div className="img-box img-box-hover"></div>

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
            {/*
            <div
                className="module-area"
                style={{ display: "flex", margin: "auto", width: "300px" }}
            >
                <Link to={`./1`}>
                    <div className="module1" style={{ width: "100px" }}>
                        <img
                            src={module.img}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
                <Link to={`./2`}>
                    <div className="module2" style={{ width: "100px" }}>
                        <img
                            src={module.img}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
                <Link to={`./3`}>
                    <div className="module3" style={{ width: "100px" }}>
                        <img
                            src={module.img}
                            className="App-logo"
                            alt="React"
                        />
                        <p>모듈명</p>
                    </div>
                </Link>
            </div>
        */}
        </div>
    );
};

export default Understand;
