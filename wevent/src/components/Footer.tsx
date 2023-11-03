import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: lightgrey;
  padding: 2rem 0 4rem 0;
  display: grid;
  place-items: center;
  margin-top: 10rem;
`;

const FooterWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0 0 -30rem;
`;

const FooterItems = styled.div`
  display: grid;
  flex-direction: column;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
`;

const FooterItemsH2 = styled.h2`
  margin-bottom: 16px;
  color: grey;
`;

const FooterItemsA = styled.p`
  color: darkgrey;
  text-decoration: none;
  margin-bottom: 8px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterItems>
          <img src="Images/Logo.png" alt="logo" />
        </FooterItems>
        <FooterItems>
          {/*1열*/}
          <FooterItemsH2>COMPANY</FooterItemsH2>
          <FooterItemsA>상호: WEVENT 사업자 등록번호:</FooterItemsA>
          <FooterItemsA>대표: 김강민</FooterItemsA>
        </FooterItems>

        {/*2열*/}
        <FooterItems>
          <FooterItemsH2>CONTACT US</FooterItemsH2>
          <FooterItemsA>wevent.official</FooterItemsA>
          <FooterItemsA>xxxxx@gmail.com</FooterItemsA>
        </FooterItems>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
