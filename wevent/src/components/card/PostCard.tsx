import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
  event_image: string;
  title: string;
  dday: string;
  host: string;
  sponsor_category: string;
  views: string;
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
  margin-bottom: -5px;
`;

const Text2 = styled.p`
  font-size: 20px;
  font-weight: 3px;
  color: #666;
  margin-bottom: -3px;
  margin-top: -15px;
`;

const Text3 = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: -3px;
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
  event_image,
  dday,
  title,
  sponsor_category,
  host,
  views,
}: PostCardProps) {
  return (
    <OuterContainer>
      <Image src={event_image} alt="img" />
      <TextContainer>
        <Text1>{dday}</Text1>
        <Text2>{title}</Text2>
        <Text3>{sponsor_category}</Text3>
        <Text4>
          <HostText>{host}</HostText>
          <ViewText>{views}회 조회</ViewText>
        </Text4>
      </TextContainer>
    </OuterContainer>
  );
}
