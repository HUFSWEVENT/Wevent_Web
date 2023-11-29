import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  customStyles?: {
    searchWrapper?: any;
  };
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  border: 1px solid #ccc;
  border-radius: 3rem;
  padding: 1rem;
  margin-right: 4rem;
  background-color: white;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 35rem;
  margin-left: 0.5rem;
`;

const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
`;

export default function SearchBar({ onSearch }: SearchBarProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <SearchWrapper>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="협찬하고 싶은 행사를 찾아보세요!"
        />
        <SearchIcon
          src="/Images/search-icon.png"
          alt="searchicon"
          onClick={handleSearch}
        />
      </SearchWrapper>
    </div>
  );
}
