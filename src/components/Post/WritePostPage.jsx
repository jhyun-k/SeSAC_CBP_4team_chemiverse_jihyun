import React from 'react';
import styles from './css/WritePostPage.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const WritePostPage = () => {
  return (
    <form className={styles.writeForm}>
      <div className='editor'></div>
      <input
        className={styles.titleInput}
        type='text'
        placeholder='제목을 입력해주세요.'
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
        }}
        data='<p>내용을 입력해주세요.</p>'
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
      <div className={styles.btnBox}>
        <button className={styles.temporaryBtn}>임시저장</button>
        <button className={styles.submitBtn}>등록</button>
      </div>
    </form>
  );
};

export default WritePostPage;
