import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface BlueButtonProps {
  children: ReactNode;
  color?: 'blue' | 'gray';
  width?: string;
  onClickEvent?: null | (() => void);
}

type buttonStyleType = {
  color: 'blue' | 'gray';
  width: string;
};

const StyledButton = styled.button<buttonStyleType>`
  border-radius: 20px;
  color: white;
  background-color: ${(props) =>
    props.color === 'blue'
      ? theme.colors['main-color']
      : props.color === 'gray'
      ? '#ADB3BA'
      : props.color};
  padding: 10px;
  width: ${(props) => props.width};
  height: 2.6rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

export default function Button({
  children,
  color = 'blue',
  width = '8rem',
  onClickEvent = null,
}: BlueButtonProps) {
  return (
    <StyledButton
      color={color}
      width={width}
      onClick={() => {
        onClickEvent && onClickEvent();
      }}
    >
      {children}
    </StyledButton>
  );
}
