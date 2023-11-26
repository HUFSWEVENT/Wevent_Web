import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import PostCard from '../components/card/PostCard';
import Header from '../components/Header/Header';
import Wrapper from 'components/Container/Wrapper';
import PostCardContainer from '../components/Container/PostCardContainer';
import Carousel from '../components/Carousel';
import DropDownButton from 'components/button/DropDownButton';
import MoreEventButton from 'components/button/MoreEventButton';
import styled from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const EventTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const EventTitle2 = styled.div`
  font-size: 1.2rem;
  color: #adb3ba;
  font-weight: bold;
`;

function Home() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('https://wevent-api-nvcxh.run.goorm.site/api/events/home/')
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const postsToShow = events.slice(0, 16);

  return (
    <>
      <Header />
      <Wrapper>
        <Carousel />
        <TextContainer>
          <EventTitle>행사리스트</EventTitle>
          <MoreEventButton />
        </TextContainer>
        <TextContainer>
          <EventTitle2>행사에 협찬하고 홍보 효과를 누리세요!</EventTitle2>
          <DropDownButton />
        </TextContainer>
        <PostCardContainer>
          {postsToShow.map(
            ({
              id,
              event_image,
              date,
              deadline,
              title,
              sponsor_category,
              host,
              views,
            }) => {
              const dday = calculateDday(deadline, date);

              return (
                <PostCard
                  key={id}
                  event_image={event_image}
                  dday={dday}
                  title={title}
                  sponsor_category={sponsor_category}
                  host={host}
                  views={views}
                />
              );
            },
          )}
        </PostCardContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

function calculateDday(deadline: string, date: string): string {
  const deadlineDate = new Date(deadline);
  const eventDate = new Date(date);
  const timeDiff = deadlineDate.getTime() - eventDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return `D${daysDiff}`;
}

export default Home;
