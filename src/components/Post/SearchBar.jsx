import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <select>
        <option value='전체'>전체</option>
        <option value='제목'>제목</option>
        <option value='작성자'>작성자</option>
        <option value='내용'>내용</option>
      </select>
      <input type='text' placeholder='검색어를 입력해주세요' />
    </form>
  );
};

export default SearchBar;
