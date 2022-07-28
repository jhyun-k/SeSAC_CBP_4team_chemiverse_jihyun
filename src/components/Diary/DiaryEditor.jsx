import React from "react";
import { useState, useRef } from "react";
import styles from "./css/diary.module.css";

const DiaryEditor = ({ onCreate }) => {
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

  const [submit,setSubmit] = useState(true);

  const handleSubmit = () => {
    if (state.content.length < 5) {
      contentInput.current.focus();
      setSubmit(false);
      return;
    }

    onCreate(state.author, state.content);
    alert("저장되었습니다.");
    setSubmit(true);
    setState({
      content: "",
    });
  };

  const doPrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className={styles.DiaryEditor}>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="내용"
          type="text"
        />
        <h5 className={submit===true?`${styles.submitTrue}`:`${styles.submitFalse}`}>5글자 이상 입력하세요.</h5>
      </div>
      <div className={styles.btn}>
        <button onClick={() => alert("임시저장 완료")}>임시저장</button>
        <button onClick={handleSubmit}>작성하기</button>
        <button onClick={doPrint}>인쇄하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
