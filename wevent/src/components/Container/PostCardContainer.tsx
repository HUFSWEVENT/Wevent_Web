import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface RankCardContainerProps {
  children: ReactNode;
}

const RankCardContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 3rem;
  margin: auto;
`;

export default function RankCardContainer({
  children,
}: RankCardContainerProps) {
  return <RankCardContainerDiv>{children}</RankCardContainerDiv>;
}
