import React from "react";
import { useState, useRef } from "react";
import styles from "../css/think.module.css";

const ThinkEditor = ({ onCreate }) => {
    const contentInput = useRef();

    const [state, setState] = useState({
        content: "",
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        onCreate(state.content);
        alert("저장성공!");
        setState({
            content: "",
        });
    };

    return (
        <div className={styles.ThinkEditor}>
            <div className={styles.textareaDiv}>
                <textarea
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                    placeholder="내용을 입력하세요. 작성한 글은 작성자와 관리자에게만 공개됩니다."
                    type="text"
                    className={styles.textArea}
                />
            </div>
            <div className={styles.buttonArea}>
                <button onClick={() => alert("임시저장 완료")}>임시저장</button>
                <button onClick={handleSubmit}>작성하기</button>
            </div>
        </div>
    );
};

export default ThinkEditor;
