import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import styles from "./css/learning.module.css";
import ModalContent1 from "./ModalContent1";
import Think from "./Think/Think";
import { useMediaQuery } from "react-responsive";
import { BsCheckLg } from "react-icons/bs";
import ModalVideo from "./ModalVideo";

const LearningModule = ({ module }) => {
    const { id } = useParams();
    const data = module[id - 1];
    const [CardModalShown, CardToggleModal] = useState(false);
    const [VideoModalShown, VideoToggleModal] = useState(false);

    const isMobile = useMediaQuery({
        query: "(max-width: 720px)",
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 721px)",
    });

    return (
        <div className={styles.moduleBox}>
            {/* 역량학습 타이틀 */}
            <p className={styles.pin}>
                <BsCheckLg />
            </p>
            <h1 className={styles.title}>역량학습</h1>
            {/* 개요 섹션 */}
            <section className={`${styles.moduleDesc} ${styles.inner}`}>
                <div className={styles.moduleImgBox}>
                    <img src={data.img} alt="" />
                </div>
                <dl className={styles.moduleTextBox}>
                    <dt className={styles.moduleTitle}>
                        {data.name}
                        <span>{data.engName}</span>
                    </dt>
                    <dt className={styles.descTitle}>학습목표</dt>
                    <dd>{data.goal}</dd>
                    <dt className={styles.descTitle}>기본개념</dt>
                    <dd>{data.basic}</dd>
                </dl>
            </section>
            {/* 학습 섹션 */}
            <section className={styles.moduleLearning}>
                <div className={`${styles.sectionTitleArea} ${styles.inner}`}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/bg-gnb-noshadow.png"
                        }
                        alt=""
                        className={styles.sectionIcon}
                    />
                    <div className="sectionTitleText">
                        <h3 className={styles.sectionTitle}>학습</h3>
                        <p className={styles.subTitle}>
                            (마이크로러닝 / 카드뉴스)
                        </p>
                    </div>
                </div>

                <div className={`${styles.learningContents} ${styles.inner}`}>
                    {/* 카드뉴스 모달 */}
                    <div className={styles.learningContent}>
                        <div
                            className={styles.imgBox}
                            onClick={() => {
                                CardToggleModal(true);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/img-cardnews011.png"
                                }
                                alt=""
                            />

                            <Modal
                                shown={CardModalShown}
                                close={() => {
                                    CardToggleModal(false);
                                }}
                            >
                                <ModalContent1 />
                            </Modal>
                        </div>
                        <div className={styles.textBox}>
                            Think
                            <br />
                            Insight
                            <br />
                            Practice
                        </div>
                    </div>
                    {/* 모바일 화면에서 유튜브 모달(바로 이동) */}
                    {isMobile && (
                        <div class={styles.learningContent}>
                            <div className={styles.imgBox}>
                                <a href="https://www.youtube.com/watch?v=dGpYuTshhuA">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/chemiverse_img/hqdefault.webp"
                                        }
                                        alt=""
                                    />
                                </a>
                            </div>

                            <div className={styles.textBox}>
                                협업 시뮬레이션
                                <br />
                                in 메타버스
                            </div>
                        </div>
                    )}
                    {/* 데스크탑에서 유튜브 모달 */}
                    {isDesktop && (
                        <div className={styles.learningContent}>
                            <div
                                className={styles.imgBox}
                                onClick={() => {
                                    VideoToggleModal(true);
                                }}
                            >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/chemiverse_img/hqdefault.webp"
                                    }
                                    alt=""
                                />
                                <Modal
                                    shown={VideoModalShown}
                                    close={() => {
                                        VideoToggleModal(false);
                                    }}
                                >
                                    <ModalVideo />
                                </Modal>
                            </div>
                            <div className={styles.textBox}>
                                협업 시뮬레이션
                                <br />
                                in 메타버스
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* 생각해보기 섹션 */}
            <section className={`${styles.moduleThink} ${styles.inner}`}>
                <div className={styles.sectionTitleArea}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/bg-gnb-noshadow.png"
                        }
                        alt=""
                        className={styles.sectionIcon}
                    />
                    <div className="seectionTitleText">
                        <h3 className={styles.sectionTitle}>생각해보기</h3>
                        <p className={styles.subTitle}>
                            오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점,
                            성찰할 점 등에 대해 자유롭게 적어 봅시다.
                        </p>
                    </div>
                </div>
                <Think />
            </section>
        </div>
    );
};

export default LearningModule;
