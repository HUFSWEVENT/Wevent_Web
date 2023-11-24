import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dummyImg from '../data/Slides.json';

interface CarouselProps {
  active?: boolean;
}

const StyledCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 2rem;
`;

const BulletPoint = styled.div<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#01A0FF' : '#ccc')};
  transition: background-color 0.2s ease-in-out;
`;

export default function Carousel({ active }: CarouselProps) {
  const [images, setImages] = useState(dummyImg.images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleMouseEnter = () => {
    document.getElementById('prevButton')!.style.opacity = '1';
    document.getElementById('nextButton')!.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    document.getElementById('prevButton')!.style.opacity = '0';
    document.getElementById('nextButton')!.style.opacity = '0';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      <StyledCarouselWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledImage
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />

        <StyledButtonWrapper>
          <StyledButton id="prevButton" onClick={prevImage}>
            <img src="Images/LeftPageButton.png" alt="Previous" />
          </StyledButton>

          <StyledButton id="nextButton" onClick={nextImage}>
            <img src="Images/RightPageButton.png" alt="Next" />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledCarouselWrapper>

      <ProgressBar>
        {images.map((image, index) => (
          <BulletPoint key={index} active={index === currentImageIndex} />
        ))}
      </ProgressBar>
    </>
  );
}
