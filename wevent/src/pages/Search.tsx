import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Wrapper from 'components/Container/Wrapper';
import Footer from 'components/Footer';
import SearchCard from 'components/card/SearchCard';
import SectionLine from 'components/SectionLine';
import SearchSection from 'components/card/SearchSection';
import SearchContentsCard from 'components/card/SearchContentsCard';

export default function Search() {
  return (
    <>
      <Header />
      <Wrapper>
        <SearchCard />

        <SectionLine />
        <SearchSection />
        <SectionLine />

        <SearchContentsCard />
      </Wrapper>
      <Footer />
    </>
  );
}
