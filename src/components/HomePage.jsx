import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./style/connect.module.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const HomePage = () => {
    const [num, setNum] = useState(0);
    const tabData = [0, 1, 2, 3];
    const fncTab = (e, index) => {
        e.preventDefault();
        setNum(index);
    };
    const isMobile = useMediaQuery({
        query: "(max-width: 720px)",
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 721px)",
    });

    return (
        <div className={styles.connectMain}>
            {/* 모바일버전 */}
            {isMobile && (
                <ul className={styles.slidingList}>
                    <li
                        className={
                            num === 0
                                ? `${styles.slidingItem} ${styles.welcomeSlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.welcomeSlide}`
                        }
                        onClick={(e) => {
                            fncTab(e, 0);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/bg-welcome-pop.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />

                        <h2 className={styles.connectTitle}>
                            <FiChevronDown />
                            <p>환영인사</p>
                        </h2>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                여러분과 함께할 엑스퍼트컨설팅을 소개합니다. CEO
                                Welcome Message
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="welcome">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 1
                                ? `${styles.slidingItem} ${styles.introduceSlide} ${styles.on}`
                                : `${styles.introduceSlide} ${styles.slidingItem}`
                        }
                        onClick={(e) => {
                            fncTab(e, 1);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/bg-contents-pop2.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <h2 className={styles.connectTitle}>
                            <FiChevronDown />
                            <p>회사소개</p>
                        </h2>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                엑스퍼트컨설팅은 국내조직의 경영혁신 및
                                인재육성의 엑설런스 추구를 위한 여러 영역별
                                사업활동을 전개해 오고 있습니다.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="introduce">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 2
                                ? `${styles.slidingItem} ${styles.readySlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.readySlide}`
                        }
                        onClick={(e) => {
                            fncTab(e, 2);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/bg-ready-pop.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <h2 className={styles.connectTitle}>
                            <FiChevronDown />
                            <p>입사 전 준비사항</p>
                        </h2>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                합격을 진심으로 축하드립니다. 체크리스트를
                                활용하여 입사에 필요한 사항을 체크해봅시다.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="ready">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 3
                                ? `${styles.slidingItem} ${styles.homeNoticeSlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.homeNoticeSlide}`
                        }
                        onClick={(e) => {
                            fncTab(e, 3);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/bg-board-pop.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <h2 className={styles.connectTitle}>
                            <FiChevronDown />
                            <p>게시판</p>
                        </h2>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                회사에 대한 궁금한 점을 물어보세요. 나의 동료와
                                다양한 이야기를 나누어보세요.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="board/notice">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            )}
            {/* 컴퓨터버전 */}
            {isDesktop && (
                <ul className={styles.slidingList}>
                    <li
                        className={
                            num === 0
                                ? `${styles.slidingItem} ${styles.welcomeSlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.welcomeSlide}`
                        }
                        onMouseEnter={(e) => {
                            fncTab(e, 0);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/Vector-4.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/welcomeBg.png"
                            }
                            alt=""
                            className={styles.bgImg}
                        />
                        <h2 className={styles.connectTitle}>환영인사</h2>
                        <h3 className={styles.connectSubTitle}>
                            Welcome Greeting
                        </h3>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                여러분과 함께할 엑스퍼트컨설팅을 소개합니다.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="welcome">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 1
                                ? `${styles.slidingItem} ${styles.introduceSlide} ${styles.on}`
                                : `${styles.introduceSlide} ${styles.slidingItem}`
                        }
                        onMouseEnter={(e) => {
                            fncTab(e, 1);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/Vector-5.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/introduceBg.png"
                            }
                            alt=""
                            className={styles.bgImg}
                        />
                        <h2 className={styles.connectTitle}>회사소개</h2>
                        <h3 className={styles.connectSubTitle}>
                            Company Introduction
                        </h3>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                엑스퍼트컨설팅은 국내조직의 경영혁신 및
                                인재육성의 엑설런스 추구를 위한 여러 영역별
                                사업활동을 전개해 오고 있습니다.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="introduce">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 2
                                ? `${styles.slidingItem} ${styles.readySlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.readySlide}`
                        }
                        onMouseEnter={(e) => {
                            fncTab(e, 2);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/Vector-6.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/readyBg.png"
                            }
                            alt=""
                            className={styles.bgImg}
                        />
                        <h2 className={styles.connectTitle}>
                            입사 전 준비사항
                        </h2>
                        <h3 className={styles.connectSubTitle}>
                            Pre-job Preparation
                        </h3>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                합격을 진심으로 축하드립니다. 체크리스트를
                                활용하여 입사에 필요한 사항을 체크해봅시다.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="ready">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li
                        className={
                            num === 3
                                ? `${styles.slidingItem} ${styles.homeNoticeSlide} ${styles.on}`
                                : `${styles.slidingItem} ${styles.homeNoticeSlide}`
                        }
                        onMouseEnter={(e) => {
                            fncTab(e, 3);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/bg-contents-pop2.png"
                            }
                            alt=""
                            className={styles.popImg}
                        />
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/boardBg.png"
                            }
                            alt=""
                            className={styles.bgImg}
                        />
                        <h2 className={styles.connectTitle}>게시판</h2>
                        <h3 className={styles.connectSubTitle}>Board</h3>
                        <div className={styles.descArea}>
                            <p className={styles.connectDesc}>
                                회사에 대한 궁금한 점을 물어보세요. 나의 동료와
                                다양한 이야기를 나누어보세요.
                            </p>
                            <div className={styles.linkBtn}>
                                <Link to="board/notice">
                                    <BsBoxArrowInRight />
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default HomePage;