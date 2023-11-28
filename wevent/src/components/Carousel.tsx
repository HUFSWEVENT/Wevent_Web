import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import theme from 'styles/theme';
interface Ad {
  id: number;
  ad_image: string;
}

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledLeftButton = styled.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    opacity: 1;
    img {
      content: url('Images/LeftPageButton_hover.png');
    }
  }

  img {
    width: 35px;
    height: 35px;
  }
`;
const StyledRightButton = styled.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 15px;

  &:hover {
    opacity: 1;
    img {
      content: url('Images/RightPageButton_hover.png');
    }
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
  background-color: ${({ active }) =>
    active ? theme.colors['main-color'] : '#ccc'};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
`;

const Carousel: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1,
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
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          'https://wevent-api-nvcxh.run.goorm.site/api/events/home/',
        );
        setAds(response.data.ads);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [ads]);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + ads.length) % ads.length,
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const progress = ((currentImageIndex + 1) / ads.length) * 100;
  const handleBulletClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <StyledCarousel
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {ads.length > 0 && (
          <>
            <StyledImage
              src={`https://wevent-api-nvcxh.run.goorm.site${ads[currentImageIndex].ad_image}`}
              alt={`Ad ${ads[currentImageIndex].id}`}
            />
            <StyledButtonWrapper>
              <StyledLeftButton id="prevButton" onClick={prevImage}>
                <img src="Images/LeftPageButton.png" alt="Previous" />
              </StyledLeftButton>
              <StyledRightButton id="nextButton" onClick={nextImage}>
                <img src="Images/RightPageButton.png" alt="Next" />
              </StyledRightButton>{' '}
            </StyledButtonWrapper>
          </>
        )}
      </StyledCarousel>

      <ProgressBar>
        {ads.map((ad, index) => (
          <BulletPoint
            key={ad.id}
            active={index === currentImageIndex}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </ProgressBar>
    </>
  );
};

export default Carousel;
