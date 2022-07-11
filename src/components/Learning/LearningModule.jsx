import React, { useState } from "react";
// import "./css/learning.css";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import styles from "./css/learning.module.css";

const LearningModule = (props) => {
    const { id } = useParams();
    const data = props.module[id - 1];
    const [modalShown1, toggleModal1] = useState(false);
    const [modalShown2, toggleModal2] = useState(false);
    const [modalShown3, toggleModal3] = useState(false);

    return (
        <div className={styles.moduleBox}>
            <h1>상세페이지</h1>
            <section className="module-section module-desc">
                <div className={styles.imgBox}>
                    <img src={data.img} alt="" />
                </div>
                <div className="text-box">
                    <p>모듈명 {data.name}</p>
                    <p>학습목표 {data.goal}</p>
                    <p>기본개념 {data.basic}</p>
                </div>
            </section>
            <section className="module-section module-learning">
                <h3>학습(마이크로러닝 / 카드뉴스)</h3>
                <div
                    className="learning-contents"
                    style={{ display: "flex", margin: "auto", width: "1000px" }}
                >
                    {/* 학습 - 1 */}
                    <div
                        className={styles.imgBox}
                        onClick={() => {
                            toggleModal1(true);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/img-cardnews01.png"
                            }
                            alt=""
                        />

                        <Modal
                            shown={modalShown1}
                            close={() => {
                                toggleModal1(false);
                            }}
                        >
                            {/* 모달 안의 내용을 children으로 넘겨준다 */}
                            <div className={styles.imgArea}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/chemiverse_img/img-cardnews01.png"
                                    }
                                    alt=""
                                />
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/chemiverse_img/img-cardnews02.png"
                                    }
                                    alt=""
                                />
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/chemiverse_img/img-cardnews03.png"
                                    }
                                    alt=""
                                />
                            </div>
                        </Modal>
                    </div>
                    {/* 학습 - 2 */}
                    <div
                        className={styles.imgBox}
                        onClick={() => {
                            toggleModal2(true);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/no-data.png"
                            }
                            alt=""
                        />
                        <Modal
                            shown={modalShown2}
                            close={() => {
                                toggleModal2(false);
                            }}
                        >
                            <h1>2</h1>
                        </Modal>
                    </div>
                    {/* 학습 - 3 */}
                    <div
                        className={styles.imgBox}
                        onClick={() => {
                            toggleModal3(true);
                        }}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/no-data.png"
                            }
                            alt=""
                        />
                        <Modal
                            shown={modalShown3}
                            close={() => {
                                toggleModal3(false);
                            }}
                        >
                            <h1>3</h1>
                        </Modal>
                    </div>
                </div>
            </section>
            <section className="module-section module-think">
                <h3>생각해보기</h3>
                <p>
                    오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점
                    등에 대해 자유롭게 적어 봅시다.
                </p>
                {/* 글쓰기 components 추가해야됨 */}
            </section>
        </div>
    );
};

export default LearningModule;
