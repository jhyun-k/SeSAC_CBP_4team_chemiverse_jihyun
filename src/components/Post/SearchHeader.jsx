import React from 'react';
import SearchBar from './SearchBar';
import styles from './css/Header.module.css';

const SearchHeader = ({ data }) => {
  return (
    <div className={styles.searchHeader}>
      <SearchBar data={data} />
      <p className={styles.totalPost}>총 게시물 {data.length}개</p>
    </div>
  );
};

export default SearchHeader;
