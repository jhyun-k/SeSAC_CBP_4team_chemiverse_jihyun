import React from "react";
import styles from "./css/learning.module.css";

const Modal = ({ children, shown, close }) => {
    return shown ? (
        <div
            className={styles.modalBackdrop}
            onClick={() => {
                close();
            }}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button onClick={close} className={styles.closeBtn}>
                    Close
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
