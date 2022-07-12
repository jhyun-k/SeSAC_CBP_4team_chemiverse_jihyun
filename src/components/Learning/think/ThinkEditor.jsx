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

        onCreate(
            state.author,
            state.content
        ); /* tate.author 지우면 내용이 안나옴 .. 확인하기 */
        alert("저장성공!");
        setState({
            content: "",
        });
    };

    return (
        <div className={styles.ThinkEditor}>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                    placeholder="내용"
                    type="text"
                />
            </div>
            <div>
                <button onClick={handleSubmit}>작성하기</button>
            </div>
        </div>
    );
};

export default ThinkEditor;
