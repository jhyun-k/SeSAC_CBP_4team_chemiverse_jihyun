import React from "react";
import { Link } from "react-router-dom";

const WorkSkill = ({ module }) => {
    // console.log(module);
    return (
        <div
            className="module-area"
            style={{
                display: "flex",
                margin: "auto",
                width: "1000px",
            }}
        >
            {module.map((ele, index) => {
                return (
                    <Link to={`./${module[index].id}`}>
                        <div
                            className="module"
                            style={{
                                width: "300px",
                                overflow: "hidden",
                                margin: "20px",
                            }}
                        >
                            <img
                                src={module[index].img}
                                className="App-logo"
                                alt="React"
                            />
                            <p>{module[index].name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default WorkSkill;
