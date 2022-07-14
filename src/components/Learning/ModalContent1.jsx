import React from "react";
import styles from "./css/learning.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/slideStyle.css";

const ModalContent1 = () => {
    return (
        <div className={styles.slide}>
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                // spaceBetween={50}
                slidesPerView={3}
                slidesPerGroup={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews01.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews02.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews03.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews04.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews05.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews06.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews07.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews08.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews09.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews10.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews11.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews12.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews13.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/chemiverse_img/img-cardnews14.png"
                        }
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ModalContent1;
