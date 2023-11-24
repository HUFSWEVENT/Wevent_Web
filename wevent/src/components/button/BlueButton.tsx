import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface BlueButtonProps {
  children: ReactNode;
}

const StyledButton = styled.button`
  border-radius: 20px;
  color: white;
  background-color: ${theme.colors['main-color']};
  padding: 10px;
  width: 8rem;
  height: 2.6rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

export default function BlueButton({ children }: BlueButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
