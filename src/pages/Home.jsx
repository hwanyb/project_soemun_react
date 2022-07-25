import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import styled, { keyframes } from "styled-components";

import { HomeImgArr } from "../assets/data";
import { PyeongBold, PyeongLight } from "../style/Common";
import Background from "../components/common/Background";
import Cloud from "../components/svg/Cloud";
import Star from "../components/svg/Star";

const HomeMain = styled.main`
  position: relative;
  top: 70px;
  width: 100%;
`;
const Section1 = styled.section`
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
  box-shadow: 0 0 20px #0000009d;
  position: relative;
  z-index: 999;
`;
const ShortcutWapper = styled.div`
  display: flex;
  align-items: center;
  animation: ${textLoop} 60s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;
const StyledA = styled.a`
  color: #081435;
  font-family: "PyeongChangPeace-Light";
  font-size: 24px;
  margin: 0 30px;
  white-space: nowrap;
`;

const Section2 = styled.section`
  width: 100%;
  background-color: #081435;
  padding: 80px 200px;
  text-align: center;
  position: relative;
  z-index: 9;
`;
const SectionTitle = styled(PyeongBold)`
  font-size: 30px;
  color: #ffc806;
`;
const SectionDesc = styled(PyeongLight)`
  font-size: 14px;
  color: #fff;
  margin-top: 10px;
`;
const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin-top: 30px;
`;
const StyledSlide = styled(SwiperSlide)`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 30px;
  img {
    height: 110%;
    object-fit: cover;
  }
`;
export default function Home() {
  return (
    <HomeMain>
      <Section1>
        <Background />
        <IntroWrapper>
          <IntroduceTextLight>단순한 스트리트마켓이 아니다!</IntroduceTextLight>
          <IntroduceTextLight>
            글로벌하게 먹고, 마시고, 즐길 수 있는
          </IntroduceTextLight>
          <IntroduceText>대한민국 No.1 야시장</IntroduceText>
          <IntroBtn>더보기</IntroBtn>
        </IntroWrapper>
      </Section1>
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
      <Section2>
        <SectionTitle>생생갤러리</SectionTitle>
        <SectionDesc>서문시장 야시장의 생생한 현장 둘러보기!</SectionDesc>
        <StyledSwiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
        >
          {HomeImgArr.map((img) => (
            <StyledSlide key={img.id}>
              <img src={img.url} alt="전경 사진" />
            </StyledSlide>
          ))}
        </StyledSwiper>
      </Section2>
    </HomeMain>
  );
}
