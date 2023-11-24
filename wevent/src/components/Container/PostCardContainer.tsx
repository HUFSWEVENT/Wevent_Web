import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface PostCardContainerProps {
  children: ReactNode;
}

const PostCardContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 3rem;
  margin: auto;
`;

export default function PostCardContainer({
  children,
}: PostCardContainerProps) {
  return <PostCardContainerDiv>{children}</PostCardContainerDiv>;
}
