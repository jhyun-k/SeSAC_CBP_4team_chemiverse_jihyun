import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/learning.module.css";

// 회사이해
const Understand = ({ module }) => {
    return (
        <div className={styles.inner}>
            <ul className={styles.moduleList}>
                {/* 모듈 목록  */}
                {module.map((ele) => {
                    return (
                        <li className={styles.moduleListItem} key={ele.id}>
                            <Link to={`./${ele.id}`}>
                                <div className={styles.imgBox}>
                                    <img src={ele.img} alt="React" />
                                    <div className={styles.hover}>
                                        {ele.goal}
                                        <p className={styles.moreBtn}>더보기</p>
                                    </div>
                                </div>
                                <p className={styles.moduleName}>{ele.name}</p>
                                <p className={styles.moduleEngName}>
                                    {ele.engName}
                                </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Understand;
