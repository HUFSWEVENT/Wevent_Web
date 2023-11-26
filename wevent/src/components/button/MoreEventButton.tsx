import React from 'react';
import styled from 'styled-components';

const EventDetailsContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const MoreEvent = styled.div`
  color: #adb3ba;
  font-size: 1.2rem;
  font-weight: bold;

  ${EventDetailsContainer}:hover & {
    color: #01a0ff;
  }
`;

const EventImage = styled.img`
  margin-left: 5px;
  transition: transform 0.3s ease-in-out;

  ${EventDetailsContainer}:hover & {
    content: url('Images/arrow_circle_hover.png');
  }
`;
function MoreEventButton() {
  return (
    <>
      <EventDetailsContainer>
        <MoreEvent>행사더보기</MoreEvent>
        <EventImage src="Images/arrow_circle.png" alt="행사 더보기" />
      </EventDetailsContainer>
    </>
  );
}

export default MoreEventButton;
