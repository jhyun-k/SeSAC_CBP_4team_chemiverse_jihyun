import React, { useRef } from 'react';
import styles from './css/PostTab.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './css/editor.css';

const WritePostPage = ({ newContent, setNewContent }) => {
  const titleInput = (e) => {
    setNewContent({ ...newContent, title: e.target.value });
  };
  return (
    <form className={styles.writeForm}>
      <div className='editor'></div>
      <input
        className={styles.titleInput}
        type='text'
        placeholder='제목을 입력해주세요.'
        onChange={titleInput}
      />
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'uploadImage',
            'ckfinder',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo',
          ],
          placeholder: '내용을 입력하세요.',
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setNewContent({ ...newContent, body: data });
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
      <div className={styles.btnBox}>
        <label htmlFor=''>
          <input type='radio' />
          비공개
        </label>
        <button className={styles.temporaryBtn}>임시저장</button>
        <button className={styles.submitBtn}>등록</button>
      </div>
    </form>
  );
};

export default WritePostPage;
