import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 0.625rem;
  }
`;

const Image = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: -5px;
  padding: 10px;
`;

const TextContainer = styled.div`
  text-align: left;
  padding: 10px;
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
  const navigate = useNavigate();

  const baseUrl = 'https://wevent-api-nvcxh.run.goorm.site';
  const fullImageUrl = baseUrl + event_image;
  return (
    <OuterContainer>
      <Image src={fullImageUrl} onClick={() => navigate(`/search`)} alt="img" />
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
