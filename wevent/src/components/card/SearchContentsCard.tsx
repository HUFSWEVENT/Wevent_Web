import React from 'react';
import styled from 'styled-components';
import SectionLine from 'components/SectionLine';
import theme from 'styles/theme';
import Button from 'components/button/Button';
const BoldText = styled.p`
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: 5px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const BoldText2 = styled.p`
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${theme.colors['dark-grey']};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 100px;
  td {
    padding: 8px;
  }

  td:first-child {
    width: 5%;
    color: #7d7d7d;
    font-size: 1.2rem;
    font-weight: bold;
  }

  td:nth-child(2) {
    width: 25%;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const TextContents = styled.p`
  font-size: 1.2rem;
  margin: 20px 25px 100px 25px;
`;

function SearchContentsCard() {
  return (
    <>
      <div id="introduction">
        <BoldText>행사 소개</BoldText>
      </div>
      <SectionLine />
      <StyledTable>
        <tbody>
          <tr>
            <td>행사명</td>
            <td>2023 간지톤 : 미르톤</td>
          </tr>
          <tr>
            <td>주최사명</td>
            <td>멋쟁이사자처럼 대학 연합</td>
          </tr>
          <tr>
            <td>행사 분야</td>
            <td>IT / 프로그래밍</td>
          </tr>
          <tr>
            <td>행사 유형</td>
            <td>데모데이</td>
          </tr>
          <tr>
            <td>행사 날짜</td>
            <td>23.11.11 토 ~ 23.11.12 일</td>
          </tr>
          <tr>
            <td>협찬 마감일</td>
            <td>23.07.31 월</td>
          </tr>
        </tbody>
      </StyledTable>
      <div id="purpose">
        <BoldText>행사 목적</BoldText>
      </div>
      <SectionLine />
      <TextContents>
        멋쟁이 사자처럼 대학에 소속되어 있는 8개의 대학이 참여하는 네트워킹
        해커톤으로 지속 가능한 대학생 네트워크를 조성, 경험과 지식 공유 + 역량의
        향상, 새로운 기술의 발견을 목적으로 합니다. 자신만의 아이디어를 또래와의
        협업을 통해 구체화된 완성품으로 만들어보고, 함께 교류하며 서로의 고민을
        나눌 수 있는 커뮤니티의 장을 열 수 있으리라 기대합니다. 학생 개발자들이
        단기적으로 오픈소스 개발 프랙티스를 습득하여 오픈 소스 프로젝트를
        기획/개발/구현하여 작은 성과를 만들고 프로젝트의 소스를 오픈하는 경험을
        가지게 하여, 해커톤 이후에도 오픈소스 개발의 주도적인 역할을 하면서 다른
        학생들을 리드할 수 있을만큼 성장하는 것을 목적으로 합니다.
      </TextContents>
      <div id="benefits">
        <BoldText>협찬 혜택</BoldText>
      </div>
      <SectionLine />
      <BoldText>협찬 요청 물품 : </BoldText>
      <BtnWrapper>
        <Button color={'gray'} width={'10rem'}>
          현금
        </Button>
        <Button color={'gray'} width={'10rem'}>
          다과
        </Button>
        <Button color={'gray'} width={'10rem'}>
          의자/책상
        </Button>
        <Button color={'gray'} width={'10rem'}>
          음료
        </Button>
        <Button color={'gray'} width={'10rem'}>
          네트워크 장비
        </Button>
      </BtnWrapper>
      <TextContents>
        저희 행사에 후원해주신다면 어쩌구저쩌구 아무튼 좋음! 저희 행사에
        후원해주신다면 어쩌구저쩌구 아무튼 좋음!저희 행사에 후원해주신다면
        어쩌구저쩌구 아무튼 좋음!저희 행사에 후원해주신다면 어쩌구저쩌구 아무튼
        좋음!저희 행사에 후원해주신다면 어쩌구저쩌구 아무튼 좋음!저희 행사에
        후원해주신다면 어쩌구저쩌구 아무튼 좋음!저희 행사에 후원해주신다면
        어쩌구저쩌구 아무튼 좋음!저희 행사에 후원해주신다면 어쩌구저쩌구 아무튼
        좋음!저희 행사에 후원해주신다면 어쩌구저쩌구 아무튼 좋음!저희 행사에
        후원해주신다면 어쩌구저쩌구 아무튼 좋음!
      </TextContents>
      <div id="guides">
        <BoldText>참가자 안내</BoldText>
      </div>
      <SectionLine />
      <BoldText2>참가자 모집 방법</BoldText2>
      <TextContents>
        저희는 이러쿵저러쿵 쿵기덕쿵더러러러 해서 참가자 모집할 계획입니다.
        그럴싸하쥬?
      </TextContents>

      <BoldText2>참가자 유형</BoldText2>
      <TextContents>
        저희 행사에 참여하는 참가자는 모두 이쁘고 잘생기고 성격도 좋은
        인싸들입니다. 저희 행사에 후원안하면 100% 후회함ㅋㅋ
      </TextContents>
    </>
  );
}

export default SearchContentsCard;
