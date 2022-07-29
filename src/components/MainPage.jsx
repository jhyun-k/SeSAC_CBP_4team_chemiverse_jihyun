import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Loginok from "./Login/Loginok";
import { useState } from "react";
import styles from "./style/mainPage.module.css";
import { IoIosArrowForward } from "react-icons/io";

const MainPage = () => {
    const mobileMenuList = [
        {
            name: "교육장 이동",
            src: process.env.PUBLIC_URL + "/chemiverse_img/img-login.png",
            link: "./move",
        },
        {
            name: "Connect With",
            src:
                process.env.PUBLIC_URL +
                "/chemiverse_img/img-pop-checklist.png",
            link: "/",
        },
        {
            name: "교육 안내",
            src: process.env.PUBLIC_URL + "/chemiverse_img/img-pop-board.png",
            link: "./guide",
        },
        {
            name: "진단",
            src: process.env.PUBLIC_URL + "/chemiverse_img/Group 59 Copy.png",
            link: "./diagnosis",
        },
        {
            name: "역량학습",
            src: process.env.PUBLIC_URL + "/chemiverse_img/Group 230.png",
            link: "./learning",
        },
        {
            name: "ChemiStory",
            src: process.env.PUBLIC_URL + "/chemiverse_img/옷가게.png",
            link: "./chemiStory",
        },
        {
            name: "게시판",
            src: process.env.PUBLIC_URL + "/chemiverse_img/Group 254.png",
            link: "./post/freepost",
        },
        {
            name: "멘토링",
            src: process.env.PUBLIC_URL + "/chemiverse_img/Group 227.png",
            link: "./mentoring",
        },
    ];
    return (
        <>
            <div className={styles.mainPage}>
                <div className={styles.hoverBox}>
                    <div className={`${styles.box1} ${styles.box}`}>
                        <div
                            className={`${styles.connectWith} ${styles.common}`}
                        >
                            <Link to="/">
                                <p>Connect With 바로가기 설명글입니다.</p>
                                <span>Connect With 바로가기</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box2} ${styles.box}`}>
                        <div className={`${styles.move} ${styles.common}`}>
                            <Link to="./move">
                                <p>교육장 이동 설명글입니다.</p>
                                <span>교육장 이동</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box3} ${styles.box}`}>
                        <div className={`${styles.guide} ${styles.common}`}>
                            <Link to="./guide">
                                <p>교육 안내 설명글입니다.</p>
                                <span>교육 안내</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box4} ${styles.box}`}>
                        <div className={`${styles.learning} ${styles.common}`}>
                            <Link to="./learning">
                                <p>역량 학습 설명글입니다.</p>
                                <span>역량 학습</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box5} ${styles.box}`}>
                        <div
                            className={`${styles.chemiStory} ${styles.common}`}
                        >
                            <Link to="./chemiStory">
                                <p>Chemi Story 설명글입니다.</p>
                                <span>Chemi Story</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box6} ${styles.box}`}>
                        <div className={`${styles.post} ${styles.common}`}>
                            <Link to="./post/freepost">
                                <p>궁금한 점을 물어보세요.</p>
                                <span>게시판</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box7} ${styles.box}`}>
                        <div className={`${styles.mentoring} ${styles.common}`}>
                            <Link to="./mentoring">
                                <p>멘토링 설명글입니다.</p>
                                <span>멘토링</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box8} ${styles.box}`}>
                        <div className={`${styles.diagnosis} ${styles.common}`}>
                            <Link to="./diagnosis">
                                <p>진단 설명글입니다.</p>
                                <span>진단</span>
                                <IoIosArrowForward className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    className={styles.img1}
                    src={"/chemiverse_img/img-main-cloud03.png"}
                    alt="img-main-cloud03"
                />
                <img
                    className={styles.img2}
                    src={"/chemiverse_img/img-main-cloud03.png"}
                    alt="img-main-cloud03"
                />
                <img
                    className={styles.img3}
                    src={"/chemiverse_img/img-main-cloud03.png"}
                    alt="img-main-cloud03"
                />
            </div>
            <div className={styles.mobileMain}>
                <div className={styles.mainBanner}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/bg-gnb-noshadow.png"
                        }
                        alt=""
                    />
                    <p>Chemiverse</p>
                    <p>On & Up</p>
                </div>
                <div className={styles.menuList}>
                    <ul>
                        {mobileMenuList.map((ele, index) => {
                            return (
                                <li className={styles.menu} key={index}>
                                    <Link to={ele.link}>
                                        <p className={styles.menuName}>
                                            {ele.name}
                                        </p>
                                        <p className={styles.menuIconBox}>
                                            <img
                                                src={ele.src}
                                                alt=""
                                                className={styles.menuIcon}
                                            />
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/chemiverse_img/ic-arrow-next.png"
                                                }
                                                alt=""
                                            />
                                        </p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainPage;
