import React from "react";
import { useState, useRef } from "react";
import styles from './css/diary.module.css';


const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content);
    alert("저장되었습니다.");
    setState({
      author: "",
      content: "",
    })

  };

  const doPrint = (e) => {
    e.preventDefault();
    window.print();
  }

  return (
    <div className={styles.DiaryEditor}>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="작성자"
          type="text"
        />
      </div>
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
      <div className={styles.btn}>
        <button onClick={() => alert('임시저장 완료')}>임시저장</button>
        <button onClick={handleSubmit}>작성하기</button>
        <button onClick={doPrint}>인쇄하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
