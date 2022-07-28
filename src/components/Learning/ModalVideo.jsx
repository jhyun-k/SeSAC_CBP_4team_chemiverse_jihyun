import React from "react";
import YouTube from "react-youtube";
import styles from "./css/learning.module.css";

const ModalVideo = () => {
    return (
        <div className={styles.youtube}>
            <YouTube
                videoId="eZYJ1rglPUs"
                opts={{
                    width: "889",
                    height: "500",
                    playerVars: {
                        autoplay: 1,
                        rel: 0,
                        modestbranding: 1,
                    },
                }}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
        </div>
    );
};

export default ModalVideo;
