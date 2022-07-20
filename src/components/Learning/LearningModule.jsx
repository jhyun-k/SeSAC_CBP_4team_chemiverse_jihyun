import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import styles from "./css/learning.module.css";
import Think from "./think/Think";
import ModalContent1 from "./ModalContent1";
import ModalContent2 from "./ModalContent2";

const LearningModule = (props) => {
    const { id } = useParams();
    const data = props.module[id - 1];
    const [modalShown1, toggleModal1] = useState(false);
    const [modalShown2, toggleModal2] = useState(false);

    return (
        <div className={styles.moduleBox}>
            <section className={styles.moduleDesc}>
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
            <section className={styles.moduleLearning}>
                <div className={styles.sectionTitleArea}>
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

                <div className={styles.learningContents}>
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
                                "/chemiverse_img/img-cardnews011.png"
                            }
                            alt=""
                        />

                        <Modal
                            shown={modalShown1}
                            close={() => {
                                toggleModal1(false);
                            }}
                        >
                            <ModalContent1 />
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
                            src="https://i.ytimg.com/an_webp/dGpYuTshhuA/mqdefault_6s.webp?du=3000&sqp=CODP05YG&rs=AOn4CLBb3QltRjmKftKER_cal8uspVKfdA"
                            alt=""
                        />
                        <Modal
                            shown={modalShown2}
                            close={() => {
                                toggleModal2(false);
                            }}
                        >
                            <ModalContent2 />
                        </Modal>
                    </div>
                </div>
            </section>
            <section className={styles.moduleThink}>
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
