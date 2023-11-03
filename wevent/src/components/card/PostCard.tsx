import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
  img: string;
  title: string;
  dday: string;
  host: string;
  type: string;
  view: string;
}

const OuterContainer = styled.div`
  display: grid;
  width: 15rem;
`;

const Image = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 8px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const Text1 = styled.p`
  font-size: 16px;
  color: #333;
  text-align: right; /* 텍스트 1 오른쪽 정렬 */
  margin-bottom: 8px;
`;

const Text2 = styled.p`
  font-size: 20px;
  font-weight: 3px;
  color: #666;
  margin-bottom: 8px;
  margin-top: -15px;
`;

const Text3 = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Text4 = styled.p`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between; /* 텍스트 5의 내부 요소들 사이에 공간 분배 */
`;

const HostText = styled.span`
  flex-basis: 65%; /* 호스트 텍스트의 너비를 조절 */
`;

const ViewText = styled.span`
  flex-basis: 30%; /* 뷰 텍스트의 너비를 조절 */
  text-align: right; /* 뷰 텍스트 오른쪽 정렬 */
`;

export default function PostCard({
  img,
  dday,
  title,
  type,
  host,
  view,
}: PostCardProps) {
  return (
    <OuterContainer>
      <Image src={img} alt="img" />
      <TextContainer>
        <Text1>{dday}</Text1>
        <Text2>{title}</Text2>
        <Text3>{type}</Text3>
        <Text4>
          <HostText>{host}</HostText>
          <ViewText>{view}</ViewText>
        </Text4>
      </TextContainer>
    </OuterContainer>
  );
}
