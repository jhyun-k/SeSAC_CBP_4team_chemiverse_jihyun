import React from 'react';
import SearchBar from './SearchBar';
import styles from './css/PostTab.module.css';

const SearchHeader = ({
  data,
  onChangeSearch,
  searchRef,
  onChangeCategory,
}) => {
  return (
    <div className={styles.searchHeader}>
      <SearchBar
        onChangeSearch={onChangeSearch}
        searchRef={searchRef}
        onChangeCategory={onChangeCategory}
      />
      <p className={styles.totalPost}>총 게시물 {data.length}개</p>
    </div>
  );
};

export default SearchHeader;
