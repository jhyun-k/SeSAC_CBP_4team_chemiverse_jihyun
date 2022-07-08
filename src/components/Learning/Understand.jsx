import React from "react";
import { Link } from "react-router-dom";

// 회사이해
const Understand = ({ module }) => {
    return (
        <div
            className="module-area"
            style={{
                display: "flex",
                margin: "auto",
                width: "1000px",
            }}
        >
            {/* 모듈 목록  */}
            {module.map((ele) => {
                console.log(ele);
                return (
                    <Link to={`./${ele.id}`}>
                        <div
                            className="module"
                            style={{
                                width: "300px",
                                overflow: "hidden",
                                margin: "20px",
                            }}
                        >
                            <img
                                src={ele.img}
                                className="App-logo"
                                alt="React"
                            />
                            <p>{ele.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Understand;
