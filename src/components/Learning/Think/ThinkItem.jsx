import React from "react";
import { useState, useRef } from "react";
import styles from "../css/think.module.css";

const ThinkItem = ({ onEdit, content, created_date, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`수정하시겠습니까?`)) {
            onEdit(id, localContent);
            toggleIsEdit();
        }
    };

    return (
        <div className={styles.ThinkItem}>
            <div className={styles.content}>
                {isEdit ? (
                    <>
                        <textarea
                            ref={localContentInput}
                            value={localContent}
                            onChange={(e) => setLocalContent(e.target.value)}
                        />
                    </>
                ) : (
                    <>{content}</>
                )}
            </div>
            {isEdit ? (
                <div className={styles.buttonArea}>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </div>
            ) : (
                <div className={styles.buttonArea}>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </div>
            )}
        </div>
    );
};

export default ThinkItem;
