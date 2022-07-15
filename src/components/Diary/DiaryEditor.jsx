import React from "react";
import { useState, useRef } from "react";
import styles from './css/diary.module.css';


const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
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

    onCreate(state.author, state.content, state.emotion);
    alert("저장성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,  
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
      {/* <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div> */}
      <div>
        <button onClick={() => alert('임시저장 완료')}>임시저장</button>
        <button onClick={handleSubmit}>작성하기</button>
        <button onClick={doPrint}>인쇄하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
