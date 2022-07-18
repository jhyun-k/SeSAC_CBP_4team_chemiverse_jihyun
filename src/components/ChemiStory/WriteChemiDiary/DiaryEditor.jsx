import React from "react";
import { useState, useRef } from "react";
import styles from "./css/diary.module.css";

const DiaryEditor = ({ onCreate }) => {
  const contentInput = useRef();

  const [state, setState] = useState({
    content: "",
  });
  const [state2, setState2] = useState({
    content: "",
  });
  const [state3, setState3] = useState({
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeState2 = (e) => {
    setState2({
      ...state2,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeState3 = (e) => {
    setState3({
      ...state3,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // if (state.content.length < 5) {
    //   contentInput.current.focus();
    //   return;
    // }
    // if (state2.content.length < 5) {
    //   contentInput.current.focus();
    //   return;
    // }
    // if (state3.content.length < 5) {
    //   contentInput.current.focus();
    //   return;
    // }

    // onCreate( state.content, state2.content, state3.content);

    onCreate([
      {
        id: 0,
        content: state.content,
      },
      {
        id: 1,
        content: state2.content,
      },
      {
        id: 2,
        content: state3.content,
      },
    ]);
    alert("저장성공!");
    setState({
      content: "",
    });
  };

  return (
    <div className={styles.DiaryEditor}>
      <div className={styles.editorTxt}>
        <h1>목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;표</h1>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="내용"
          type="text"
        />
      </div>
      <div className={styles.editorTxt}>
        <h1>필요역량</h1>
        <textarea
          ref={contentInput}
          name="content"
          value={state2.content}
          onChange={handleChangeState2}
          placeholder="내용"
          type="text"
        />
      </div>
      <div className={styles.editorTxt}>
        <h1>실행계획</h1>
        <textarea
          ref={contentInput}
          name="content"
          value={state3.content}
          onChange={handleChangeState3}
          placeholder="내용"
          type="text"
        />
      </div>
      <div className={styles.btn}>
        <button onClick={() => alert("임시저장 완료")}>임시저장</button>
        <button onClick={handleSubmit}>작성하기</button>
        {/* <button onClick={doPrint}>인쇄하기</button> */}
      </div>
    </div>
  );
};

export default DiaryEditor;
