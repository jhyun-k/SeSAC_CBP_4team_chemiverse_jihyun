import React from "react";
import styles from "./css/learning.module.css";
import "./css/slideStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalContent1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className={styles.slide}>
            <h1>미래를 향한 TIP을 찾다</h1>
            <Slider {...settings}>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews01.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews02.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews03.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews04.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews05.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews06.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews07.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews08.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews09.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews10.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews11.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews12.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews13.png"
                        }
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews14.png"
                        }
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    );
};

export default ModalContent1;
