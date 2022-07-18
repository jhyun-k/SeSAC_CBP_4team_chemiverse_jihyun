import React from "react";
import YouTube from "react-youtube";
import styles from "./css/learning.module.css";

const ModalContent2 = () => {
    return (
        <div className={styles.youtube}>
            <YouTube
                videoId="dGpYuTshhuA"
                opts={{
                    width: "889",
                    height: "500",
                    playerVars: {
                        autoplay: 1, //자동재생 O
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
        </div>
    );
};

export default ModalContent2;
