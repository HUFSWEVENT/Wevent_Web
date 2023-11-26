import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Button from '../button/Button';

const HeaderContainer = styled.div`
  height: 12rem;
  background-color: white;
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 89rem;
`;

const Logo = styled.img``;

const Login = styled.button`
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  margin-left: 8rem;
  margin-right: 2rem;
  background-color: white;
  cursor: pointer;
`;
const Signup = styled.button`
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Header = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('검색:', searchTerm);
  };
  return (
    <HeaderContainer>
      <Logo src="Images/Logo.png" alt="logo" />

      <SearchBar onSearch={handleSearch} />

      <Button>무료 행사 등록</Button>
      <Login>로그인</Login>
      <Signup>회원가입</Signup>
    </HeaderContainer>
  );
};

export default Header;
