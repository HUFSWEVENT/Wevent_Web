import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 12rem;
  background-color: white;
  align-items: center;
  margin-bottom: 5rem;
  display: flex;
`;

const Logo = styled.img`
  margin-left: 10rem;
`;
const Img = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  border: 1px solid #ccc;
  border-radius: 3rem;
  padding: 1rem;
  margin-right: 4rem;
`;

const SearchInput = styled.input`
  width: 38rem; /* 원하는 너비로 조정하세요. */
  height: 1.3rem;
  outline: none;
  border: none;
  font-size: 1.2rem;
`;

const Register = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #01a0ff;
  width: 8rem;
  height: 2.2rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  margin-right: 13rem;
`;

const Rogin = styled.button`
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  margin-right: 2rem;
  background-color: white;
`;
const Signup = styled.button`
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="Images/Logo.png" alt="logo" />
      <SearchContainer>
        <Img src="Images/search-icon.png" alt="searchicon" />
        <SearchInput
          type="text"
          placeholder="협찬하고 싶은 행사를 찾아보세요."
        />
      </SearchContainer>
      <Register>무료 행사 등록</Register>
      <Rogin>로그인</Rogin>
      <Signup>회원가입</Signup>
    </HeaderContainer>
  );
};

export default Header;
