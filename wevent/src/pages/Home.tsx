import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import PostCard from '../components/card/PostCard';
import Header from '../components/Header/Header';
import Wrapper from 'components/Container/Wrapper';
import PostCardContainer from '../components/Container/PostCardContainer';
import Post from '../data/Post.json';
import EventListText from 'components/EventListText';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Wrapper>
        <div
          onClick={() => {
            navigate('/search');
          }}
        >
          test 클릭 서치페이지 이동
        </div>

        <EventListText />
        <PostCardContainer>
          {Post.map(({ id, img, dday, title, type, host, view }) => {
            return (
              <PostCard
                key={id}
                img={img}
                dday={dday}
                title={title}
                type={type}
                host={host}
                view={view}
              />
            );
          })}
        </PostCardContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
