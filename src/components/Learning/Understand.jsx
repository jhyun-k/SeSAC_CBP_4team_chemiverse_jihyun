import React from "react";
import { Link } from "react-router-dom";

const Understand = ({ module }) => {
    console.log(module);
    /* 테스트용 데이터!! 나중에 axios나 .. 머 그런걸로 가져와야됨 */
    const md = [
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

    return (
        <div
            className="module-area"
            style={{
                display: "flex",
                margin: "auto",
                width: "1000px",
            }}
        >
            {md.map((ele, index) => {
                return (
                    <Link to={`./${md[index].id}`}>
                        <div
                            className="module1"
                            style={{
                                width: "300px",
                                overflow: "hidden",
                                margin: "20px",
                            }}
                        >
                            <img
                                src={md[index].img}
                                className="App-logo"
                                alt="React"
                            />
                            <p>{md[index].name}</p>
                        </div>
                    </Link>
                );
            })}
            {/* 
            <div
                className="module-area"
                style={{ display: "flex", margin: "auto", width: "300px" }}
            >
                <Link to={`./${md[0].id}`}>
                    <div className="module1" style={{ width: "100px" }}>
                        <img src={md[0].img} className="App-logo" alt="React" />
                        <p>모듈명</p>
                    </div>
                </Link>
                <Link to={`./${md[1].id}`}>
                    <div className="module2" style={{ width: "100px" }}>
                        <img src={md[1].img} className="App-logo" alt="React" />
                        <p>{md[1].name}</p>
                    </div>
                </Link>
                <Link to={`./${md[2].id}`}>
                    <div className="module3" style={{ width: "100px" }}>
                        <img src={md[2].img} className="App-logo" alt="React" />
                        <p>모듈명</p>
                    </div>
                </Link>
            </div> */}
        </div>
    );
};

export default Understand;
