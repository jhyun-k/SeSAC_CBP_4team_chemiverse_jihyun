import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/learning.module.css";

// 회사이해
const Understand = ({ module }) => {
    return (
        <div className={styles.moduleListArea}>
            {/* 모듈 목록  */}
            {module.map((ele) => {
                console.log(ele);
                return (
                    <Link to={`./${ele.id}`}>
                        <div className={styles.moduleListItem}>
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
