import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import styled, { keyframes } from "styled-components";

import { foodArr, HomeImgArr } from "../assets/data";
import { Noto300, Noto700, PyeongBold, PyeongLight } from "../style/Common";
import Background from "../components/common/Background";
import Cloud from "../components/svg/Cloud";
import Star from "../components/svg/Star";
import OperatingTime from "../components/Introduce/OperatingTime";
import { useNavigate } from "react-router-dom";

const HomeMain = styled.main`
  position: relative;
  top: 70px;
  width: 100%;
  padding-bottom: 100px;
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
  @media screen and (max-width: 900px) {
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;
const IntroWrapper = styled.div`
  position: absolute;
  text-align: center;
`;
const IntroduceTextLight = styled(PyeongLight)`
  color: #ffc806;
  font-size: 14px;
  line-height: 20px;
  @media screen and (max-width: 900px) {
    font-size: 11px;
  }
`;
const IntroduceText = styled(PyeongBold)`
  color: #fff;
  font-size: 30px;
  margin: 20px 0;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
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
  @media screen and (max-width: 900px) {
    & > svg {
      height: 30px;
    }
  }
`;
const StyledA = styled.a`
  color: #081435;
  font-family: "PyeongChangPeace-Light";
  font-size: 24px;
  margin: 0 30px;
  white-space: nowrap;
  @media screen and (max-width: 900px) {
    font-size: 14px;
    & > svg {
      height: 50px;
    }
  }
`;

const Section2 = styled.section`
  width: 100%;
  background-color: #081435;
  padding: 80px 200px;
  text-align: center;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 1600px) {
    padding: 80px 150px;
    
  }
  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
    
  }
  @media screen and (max-width: 900px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;
const SectionTitle = styled(PyeongBold)`
  font-size: 30px;
  color: ${(props) => props.color};
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;
const SectionDesc = styled(PyeongLight)`
  font-size: 14px;
  color: ${(props) => props.color};
  margin-top: 10px;
  @media screen and (max-width: 900px) {
    font-size: 11px;
  }
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
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  }
`;

const Section3 = styled.section`
  text-align: center;
  width: 100%;
  padding: 80px 200px;
  @media screen and (max-width: 1600px) {
    padding: 80px 150px;
    
  }
  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
    
  }
  @media screen and (max-width: 900px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;
const FoodContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 3px;
    background-color: #ffc806;
    border-radius: 5px;
  }
`;
const FoodList = styled.ul`
  display: flex;
  width: fit-content;
`;
const FoodItem = styled.div`
  min-width: 400px;
  border: 1px solid #ffc806;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;
const FoodImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  object-fit: contain;
  object-position: center;
`;
const FoodImg = styled.img`
  width: 100%;
`;
const FoodTitle = styled(PyeongBold)`
  font-size: 18px;
  color: #081435;
  margin: 20px 0;
  border-bottom: 1px solid #ffc806;
  padding-bottom: 10px;
`;
const FoodTag = styled(Noto700)`
  width: fit-content;
  background-color: #ffc806;
  color: #081435;
  font-size: 11px;
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const FoodDesc = styled(Noto300)`
  color: #081435;
  font-size: 11px;
  margin-bottom: 20px;
`;
const Section4 = styled.section`
  width: 100%;
  padding: 80px 200px;
  text-align: center;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 1600px) {
    padding: 80px 150px;
    
  }
  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
    
  }
  @media screen and (max-width: 900px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;
const ContentWrapper = styled.div`
  margin-top: 30px;
`;

export default function Home() {
  const navigate = useNavigate();
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
          <IntroBtn onClick={() => navigate('/introduce')}>더보기</IntroBtn>
        </IntroWrapper>
      </Section1>
      <ShortcutContainer>
        <ShortcutWapper className="shortcut-wrapper">
          <Cloud />
          <StyledA
            href="https://www.somunnanshop.com/index.php/home"
            target="_blank"
          >
            야시장 음식 스마트폰으로 주문하기
          </StyledA>
          <Star />
          <StyledA
            href="https://mmp7.cafe24.com/storymap/daeguyasijang.html"
            target="_blank"
          >
            투어미션 성공하고 선물받기
          </StyledA>
          <Cloud />
          <StyledA
            href="https://www.somunnanshop.com/index.php/home"
            target="_blank"
          >
            야시장 음식 스마트폰으로 주문하기
          </StyledA>
          <Star />
          <StyledA
            href="https://mmp7.cafe24.com/storymap/daeguyasijang.html"
            target="_blank"
          >
            투어미션 성공하고 선물받기
          </StyledA>
          <Cloud />
          <StyledA
            href="https://www.somunnanshop.com/index.php/home"
            target="_blank"
          >
            야시장 음식 스마트폰으로 주문하기
          </StyledA>
          <Star />
          <StyledA
            href="https://mmp7.cafe24.com/storymap/daeguyasijang.html"
            target="_blank"
          >
            투어미션 성공하고 선물받기
          </StyledA>
          <Cloud />
          <StyledA
            href="https://www.somunnanshop.com/index.php/home"
            target="_blank"
          >
            야시장 음식 스마트폰으로 주문하기
          </StyledA>
          <Star />
          <StyledA
            href="https://mmp7.cafe24.com/storymap/daeguyasijang.html"
            target="_blank"
          >
            투어미션 성공하고 선물받기
          </StyledA>
        </ShortcutWapper>
      </ShortcutContainer>
      <Section2>
        <SectionTitle color="#ffc806">생생갤러리</SectionTitle>
        <SectionDesc color="#fff">
          서문시장 야시장의 생생한 현장 둘러보기!
        </SectionDesc>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            600: {
              slidesPerView: 2
            },
            900: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 4
            }
          }}
        >
          {HomeImgArr.map((img) => (
            <StyledSlide key={img.id}>
              <img src={img.url} alt="전경 사진" />
            </StyledSlide>
          ))}
        </StyledSwiper>
      </Section2>
      <Section3>
        <SectionTitle color="#081435">먹거리</SectionTitle>
        <SectionDesc color="#ff9900">
          서문시장 야시장의 먹거리 둘러보기!
        </SectionDesc>
        <FoodContainer>
          <FoodList>
            {foodArr.map((food, index) => (
              <FoodItem key={index}>
                <FoodImgWrapper>
                  <FoodImg alt="음식이미지" src={food.image} />
                </FoodImgWrapper>
                <FoodTitle>{food.name}</FoodTitle>
                <FoodTag>{food.tag}</FoodTag>
                <FoodDesc>{food.desc}</FoodDesc>
              </FoodItem>
            ))}
          </FoodList>
        </FoodContainer>
      </Section3>
      <Section4>
        <SectionTitle color="#081435">운영시간</SectionTitle>
        <ContentWrapper>
          <OperatingTime />
        </ContentWrapper>
      </Section4>
    </HomeMain>
  );
}
