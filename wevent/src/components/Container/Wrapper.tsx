import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const WrapperDiv = styled.div`
  margin: auto;
  max-width: 73.75rem;
`;

export default function Wrapper({ children }: WrapperProps) {
  return <WrapperDiv>{children}</WrapperDiv>;
}
