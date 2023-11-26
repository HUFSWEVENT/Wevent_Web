import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const SearchSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 12 0;
`;

const SearchItem = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors['light-grey']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: 2px;
    color: ${theme.colors['main-color']};
  }
`;

function SearchSection() {
  return (
    <SearchSectionWrapper>
      <SearchItem>행사 소개</SearchItem>
      <SearchItem>행사 목적</SearchItem>
      <SearchItem>협찬 혜택</SearchItem>
      <SearchItem>참가자 안내</SearchItem>
      <SearchItem>행사 기록</SearchItem>
      <SearchItem>협찬 문의</SearchItem>
    </SearchSectionWrapper>
  );
}

export default SearchSection;
