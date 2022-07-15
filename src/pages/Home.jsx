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

const Section3 = styled.section`
width: 100%;
  background-color: #081435;
  padding: 80px 200px;
  text-align: center;
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
  img{
    height: 110%;
    object-fit: cover;
    
  }
`;
export default function Home() {
  const swiperImgArr = [
    {
      id: 1,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img01.jpg?raw=true"
    },
    {
      id: 2,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img02.jpg?raw=true"
    },
    {
      id: 3,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img03.jpg?raw=true"
    },
    {
      id: 4,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img04.jpg?raw=true"
    },
    {
      id: 5,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img05.jpg?raw=true"
    },
    {
      id: 6,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img06.jpg?raw=true"
    },
    {
      id: 7,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img07.jpg?raw=true"
    },
    {
      id: 8,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img08.jpg?raw=true"
    },
    {
      id: 9,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/sec4_img09.jpg?raw=true"
    },
    {
      id: 10,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/shrimp.jpg?raw=true"
    },
    {
      id: 11,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/tangsu.jpg?raw=true"
    },
    {
      id: 12,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/ttoeokbok.jpg?raw=true"
    },
    {
      id: 13,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/gogi.jpg?raw=true"
    },
    {
      id: 14,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/kabe.jpg?raw=true"
    },
    {
      id: 15,
      url: "https://github.com/hwanyb/project_seomun/blob/master/img/kkochi.jpg?raw=true"
    }
  ]
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
        <SectionTitle>생생갤러리</SectionTitle>
        <SectionDesc>서문시장 야시장의 생생한 현장 둘러보기!</SectionDesc>
        <StyledSwiper slidesPerView={4} spaceBetween={20} slidesPerGroup={3} loop={true}>
          {swiperImgArr.map((img) => (
            <StyledSlide key={img.id}>
              <img src={img.url} />
            </StyledSlide>
          ))}
        </StyledSwiper>
      </Section3>
    </HomeMain>
  );
}
