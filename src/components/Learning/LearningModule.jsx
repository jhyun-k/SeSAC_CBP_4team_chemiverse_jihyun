import React from "react";
import "./css/learning.css";
import { useParams } from "react-router-dom";

const LearningModule = (props) => {
    const { id } = useParams();
    const data = props.module[id - 1];

    console.log(props);
    return (
        <div className="module-box">
            <h1>상세페이지</h1>
            <section className="module-section module-desc">
                <div className="img-box">
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
                    <div className="img-box">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/no-data.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className="img-box">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/no-data.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className="img-box">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/chemiverse_img/no-data.png"
                            }
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="module-section module-think">
                <h3>생각해보기</h3>
                <p>
                    오늘 배운 내용에 대해 Review하며 배운 점, 느낀 점, 성찰할 점
                    등에 대해 자유롭게 적어 봅시다.
                </p>
            </section>
        </div>
    );
};

export default LearningModule;
