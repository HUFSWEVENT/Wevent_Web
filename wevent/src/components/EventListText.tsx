import React from 'react';
import styled from 'styled-components';

const EventListContainer = styled.div``;

const EventDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  /* EventDetailsContainer에 호버 시 스타일 추가 */
  &:hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  /* EventDetailsContainer에 호버 시 스타일 추가 */
  &:hover ${EventDetailsContainer} {
    cursor: pointer;
  }
`;

const MoreEvent = styled.div`
  color: #adb3ba;
  font-size: 1.2rem;
  font-weight: bold;

  /* EventDetailsContainer에 호버 시 스타일 추가 */
  ${EventDetailsContainer}:hover & {
    color: #01a0ff;
  }
`;

const EventTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.img`
  1.3rem;
  color: #adb3ba;
  font-weight: bold;
`;

const EventImage = styled.img`
  margin-left: 5px;
  transition: transform 0.3s ease-in-out;

  /* EventDetailsContainer에 호버 시 스타일 추가 */
  ${EventDetailsContainer}:hover & {
    content: url('Images/arrow_circle_hover.png');
  }
`;

const EventDropdown = styled.select``;

const EventListText = () => {
  return (
    <>
      <Container>
        <EventListContainer>
          <EventTitle>행사리스트</EventTitle>
        </EventListContainer>

        <EventDetailsContainer>
          <MoreEvent>행사더보기</MoreEvent>
          <EventImage src="Images/arrow_circle.png" alt="행사 더보기" />
        </EventDetailsContainer>
      </Container>
    </>
  );
};

export default EventListText;
