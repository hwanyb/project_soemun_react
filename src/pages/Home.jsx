import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy } from "swiper";
import "swiper/css";
import styled from "styled-components";

const HomeMain = styled.main`
  position: relative;
  top: 70px;
  overflow-x: hidden;
  width: 100%;
`;
const Section1 = styled.section`
  width: 100%;
`;
const StyledSwiper1 = styled(Swiper)`
  width: 100%;
  height: 80vh;
  &>.swiper-slide{
    overflow: hidden;
    width: 100%;
    & img {
      width: 100vw;
    }
  }
`;

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
      <Section1>
        <StyledSwiper1
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          lazy={true}
          className="mySwiper"
          modules={[ Autoplay, Lazy ]}
          l
        >
          {mainSwiperArr.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.url} className="swiper-lazy-preloader swiper-lazy-preloader-white" alt="seomun" />
              <h1>서문시장 야시장</h1>
              <h2>{slide.text}</h2>
            </SwiperSlide>
          ))}
        </StyledSwiper1>
      </Section1>
    </HomeMain>
  );
}
