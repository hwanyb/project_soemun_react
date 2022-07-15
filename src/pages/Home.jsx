import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styled, { keyframes } from "styled-components";
import { PyeongBold, PyeongLight } from "../style/Common";
import Background from "../components/Background";
import Cloud from "../components/Cloud";
import Star from "../components/Star";

const HomeMain = styled.main`
  position: relative;
  top: 70px;
  width: 100%;
`;
const Section1 = styled.section`
  width: 100%;
`;
const StyledSwiper1 = styled(Swiper)`
  width: 100%;
  height: 700px;
  overflow: hidden;
  & .swiper-slide {
    width: 100%;
    & img {
      width: 100vw;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  top: 230px;
  width: 100%;
  text-align: center;
`;
const LogoTitle = styled(PyeongBold)`
  color: #ffc806;
  font-size: 50px;
`;
const Slogan = styled(PyeongLight)`
  color: #fff;
  font-size: 24px;
  margin-top: 30px;
  text-shadow: 2px 2px 3px #000000a7;
`;
const Section2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: center;
  background-color: #081435;
  padding: 30px;
`;
const IntroWrapper = styled.div`
  position: absolute;
  text-align: center;
`;
const IntroduceTextLight = styled(PyeongLight)`
  color: #ffc806;
  font-size: 14px;
  line-height: 20px;
`;
const IntroduceText = styled(PyeongBold)`
  color: #fff;
  font-size: 30px;
  margin: 20px 0;
`;
const IntroBtn = styled.button`
  background-color: #ffc806;
  color: #081435;
  padding: 3px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`;
const textLoop = keyframes`
  0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
`;
const ShortcutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

`;
const ShortcutWapper = styled.div`
  display: flex;
  align-items: center;
  animation: ${textLoop} 60s linear infinite;
  &:hover{
    animation-play-state: paused;
   }
`;
const StyledA = styled.a`
   color: #081435;
   font-family: 'PyeongChangPeace-Light';
   font-size: 24px;
   margin: 0 30px;
   white-space: nowrap;
   
`;

const Section3 = styled.section``;
export default function Home() {
  const mainSwiperArr = [
    {
      id: 1,
      text: `서문시장 야시장과 함께라면 대구의 밤이 곧 파티다!`,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/jeonkyeong1_.jpg?raw=true",
    },
    {
      id: 2,
      text: `오감만족! 육감충족! 밤의 즐거움이 한자리에! 서문시장 야시장과 함께하는 夜한 대구여행`,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/jeonkyeong2_.jpg?raw=true",
    },
    {
      id: 3,
      text: `먹고, 마시고, 즐길 수 있는 대한민국 No.1 글로벌 야시장`,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/jeonkyeong3_.jpg?raw=true",
    },
  ];
  return (
    <HomeMain>
      {/* <Section1>
        <StyledSwiper1
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {mainSwiperArr.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.url} alt="seomun" />
              <TextWrapper>
                <LogoTitle>서문시장 야시장</LogoTitle>
                <Slogan>{slide.text}</Slogan>
              </TextWrapper>
            </SwiperSlide>
          ))}
        </StyledSwiper1>
      </Section1> */}
      
      <Section2>
        <Background />
        <IntroWrapper>
          <IntroduceTextLight>단순한 스트리트마켓이 아니다!</IntroduceTextLight>
          <IntroduceTextLight>
            글로벌하게 먹고, 마시고, 즐길 수 있는
          </IntroduceTextLight>
          <IntroduceText>대한민국 No.1 야시장</IntroduceText>
          <IntroBtn>더보기</IntroBtn>
        </IntroWrapper>
      </Section2>
      <ShortcutContainer>
        <ShortcutWapper className="shortcut-wrapper">
          <Cloud />
          <StyledA href="#">야시장 음식 스마트폰으로 주문하기</StyledA>
          <Star />
          <StyledA href="#">투어미션 성공하고 선물받기</StyledA>
          <Cloud />
          <StyledA href="#">야시장 음식 스마트폰으로 주문하기</StyledA>
          <Star />
          <StyledA href="#">투어미션 성공하고 선물받기</StyledA>
          <Cloud />
          <StyledA href="#">야시장 음식 스마트폰으로 주문하기</StyledA>
          <Star />
          <StyledA href="#">투어미션 성공하고 선물받기</StyledA>
          <Cloud />
          <StyledA href="#">야시장 음식 스마트폰으로 주문하기</StyledA>
          <Star />
          <StyledA href="#">투어미션 성공하고 선물받기</StyledA>
        </ShortcutWapper>
      </ShortcutContainer>
      <Section3>
      
      </Section3>
    </HomeMain>
  );
}
