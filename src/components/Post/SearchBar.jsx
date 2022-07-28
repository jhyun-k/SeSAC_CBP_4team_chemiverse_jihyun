import React from 'react';
import styles from './css/PostTab.module.css';

const SearchBar = ({ onChangeSearch, searchRef, onChangeCategory }) => {
  return (
    <div className={styles.searchBarBox}>
      <form className={styles.searchBar} onSubmit={onChangeSearch}>
        <select className={styles.option} onChange={onChangeCategory}>
          <option value='전체'>전체</option>
          <option value='제목'>제목</option>
          <option value='작성자'>작성자</option>
          <option value='내용'>내용</option>
        </select>
        <input
          className={styles.searchInput}
          type='search'
          placeholder='검색어를 입력하세요'
          ref={searchRef}
        />
      </form>
    </div>
  );
};

export default SearchBar;
