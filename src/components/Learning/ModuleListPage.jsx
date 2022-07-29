import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/learning.module.css";
import { BsCheckLg } from "react-icons/bs";
import { useLocation } from "react-router-dom";

// 회사이해
const Understand = ({ module }) => {
    const location = useLocation();
    let title = "";
    if (location.pathname === "/main/learning") {
        title = `회사이해`;
    } else if (location.pathname === "/main/learning/workskill") {
        title = `워크스킬`;
    } else if (location.pathname === "/main/learning/peopleskill") {
        title = `피플스킬`;
    } else if (location.pathname === "/main/learning/selfmanage") {
        title = `자기관리`;
    }
    return (
        <div className={styles.inner}>
            <p className={styles.pin}>
                <BsCheckLg />
            </p>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.moduleList}>
                {/* 모듈 목록  */}
                {module.map((ele) => {
                    return (
                        <li className={styles.moduleListItem} key={ele.id}>
                            <Link to={`./${ele.id}`}>
                                <div className={styles.imgBox}>
                                    <img src={ele.img} alt="" />
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
