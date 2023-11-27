import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import DropDownCheckbox from 'components/button/DropDownCheckbox';
import Button from 'components/button/Button';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 5px 0px 35px 0px;
`;
const Img = styled.img`
  width: 640px;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;
`;

const TextInnerWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 10 0;
  margin-bottom: 10px;
`;

const TextOuterWrapper = styled.div`
  background-color: #dfedfd;
  width: 400px;
  height: 320px;
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
`;

const Text1 = styled.div`
  color: ${theme.colors['dark-grey']};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Text2 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
`;
const TextWrapper = styled.div``;

const BtnWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;

function SearchCard() {
  return (
    <SearchWrapper>
      <Img src="Images/ad1.png"></Img>
      <TextWrapper>
        <TextOuterWrapper>
          <TextInnerWrapper>
            <Text1>행사 분야 | 세부 분야</Text1>
            <Text1>D-10</Text1>
          </TextInnerWrapper>
          <Text2>행사명</Text2>
          <Text1>주최사명</Text1>
          <Text1>후원 종류</Text1>
          <Text1>행사날짜</Text1>
        </TextOuterWrapper>
        <BtnWrapper>
          <DropDownCheckbox />
          <Button>협찬하기</Button>
        </BtnWrapper>
      </TextWrapper>
    </SearchWrapper>
  );
}

export default SearchCard;
