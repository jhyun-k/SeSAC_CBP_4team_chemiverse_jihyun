import React from 'react';
import styles from './css/PostTab.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './css/editor.css';
import { useNavigate, useLocation } from 'react-router-dom';

const WritePostPage = ({ newContent, setNewContent }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const titleInput = (e) => {
    setNewContent({ ...newContent, title: e.target.value });
  };
  const locationInclude = (name) => {
    return location.pathname.includes(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContent.title) {
      return alert('제목을 입력하세요.');
    } else if (!newContent.body) {
      return alert('내용을 입력하세요.');
    } else if (newContent.title && newContent.body) {
      if (locationInclude('freepost')) {
        navigate('/main/post/freepost');
      } else if (locationInclude('suggestIdea')) {
        navigate('/main/post/suggestIdea');
      } else if (locationInclude('introduce')) {
        navigate('/board/introduce');
      } else if (locationInclude('qna')) {
        navigate('/board/qna');
      }
      setNewContent('');
    }
  };

  return (
    <form className={styles.writeForm}>
      <div className='editor'></div>
      <input
        className={styles.titleInput}
        type='text'
        placeholder='제목을 입력해주세요.'
        onChange={titleInput}
        autoFocus
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
        <div
          className={styles.radioWrap}
          style={
            locationInclude('qna') ? { display: 'flex' } : { display: 'none' }
          }
        >
          <input type='checkbox' name='private' />
          <label htmlFor='private'>비공개</label>
        </div>

        <button
          className={styles.temporaryBtn}
          onClick={(e) => e.preventDefault()}
        >
          임시저장
        </button>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          등록
        </button>
      </div>
    </form>
  );
};

export default WritePostPage;
