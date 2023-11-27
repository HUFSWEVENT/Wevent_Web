import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import { Link } from 'react-scroll';

const SearchSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 25px 0px;
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
      <Link to="introduction" smooth={true} duration={500}>
        <SearchItem>행사 소개</SearchItem>
      </Link>
      <Link to="purpose" smooth={true} duration={500}>
        <SearchItem>행사 목적</SearchItem>
      </Link>
      <Link to="benefits" smooth={true} duration={500}>
        <SearchItem>협찬 혜택</SearchItem>
      </Link>
      <Link to="guides" smooth={true} duration={500}>
        <SearchItem>참가자 안내</SearchItem>
      </Link>
      <Link to="records" smooth={true} duration={500}>
        <SearchItem>행사 기록</SearchItem>
      </Link>
      <Link to="qna" smooth={true} duration={500}>
        <SearchItem>협찬 문의</SearchItem>
      </Link>
    </SearchSectionWrapper>
  );
}

export default SearchSection;
