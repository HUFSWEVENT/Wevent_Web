import React, { useState } from 'react';
import styled from 'styled-components';

const EventListLeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 2rem;
`;

const EventListRightContainer = styled.div`
  text-align: right;
`;

const List = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;

const MoreEvent = styled.div`
  font-size: 1rem;

  font-weight: bold;
  text-align: right;
`;

const EffectText = styled.div`
  text-align: left;
  font-size: 1.2rem;
  color: grey;
`;

function EventListText() {
  return (
    <EventListLeftContainer>
      <List>행사리스트</List>
      <MoreEvent>행사 더보기</MoreEvent>
      <EventListRightContainer>
        <EffectText>행사에 협찬하고 홍보 효과를 누리세요!</EffectText>
      </EventListRightContainer>
    </EventListLeftContainer>
  );
}

export default EventListText;
