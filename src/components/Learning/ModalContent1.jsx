import React from "react";
import styles from "./css/learning.module.css";
import "./css/slideStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const ModalContent1 = () => {
    const desktopSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const isMobile = useMediaQuery({
        query: "(max-width: 720px)",
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 721px)",
    });

    const slideImgs = [
        "img-cardnews01.png",
        "img-cardnews02.png",
        "img-cardnews03.png",
        "img-cardnews04.png",
        "img-cardnews05.png",
        "img-cardnews06.png",
        "img-cardnews07.png",
        "img-cardnews08.png",
        "img-cardnews09.png",
        "img-cardnews10.png",
        "img-cardnews11.png",
        "img-cardnews12.png",
        "img-cardnews13.png",
        "img-cardnews14.png",
    ];

    return (
        <div className={styles.slide}>
            <h1>미래를 향한 TIP을 찾다</h1>
            {isMobile && (
                <Slider {...mobileSettings}>
                    {slideImgs.map((img) => (
                        <div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    `/chemiverse_img/${img}`
                                }
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
            )}
            {isDesktop && (
                <Slider {...desktopSettings}>
                    {slideImgs.map((img) => (
                        <div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    `/chemiverse_img/${img}`
                                }
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default ModalContent1;
