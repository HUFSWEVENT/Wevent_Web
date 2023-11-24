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
  margin-bottom: -5px;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Text1 = styled.p`
  font-size: 16px;
  color: #333;
  text-align: right;
  margin-bottom: -10px;
`;

const Text2 = styled.p`
  font-size: 20px;
  font-weight: 3px;
  color: #666;
  margin-bottom: -10px;
  margin-top: -15px;
`;

const Text3 = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: -10px;
`;

const Text4 = styled.p`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

const HostText = styled.span`
  flex-basis: 65%;
`;

const ViewText = styled.span`
  flex-basis: 30%;
  text-align: right;
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
