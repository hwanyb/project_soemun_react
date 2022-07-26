import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import styled from "styled-components";
import { Noto300, PyeongBold, PyeongLight } from "../../style/Common";

export const Base = styled(ScrollContainer)`
  width: 100%;
`;
export const IntroWrapper = styled.div`
`;
export const SubHeading = styled(PyeongBold)`
  font-size: 20px;
  color: #ff9900;
`;
export const Desc = styled(PyeongLight)`
  font-size: 14px;
  color: #081435;
  margin-top: 10px;
`;
export const IntroImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 100px 0;
`;
export const IntroTitle = styled(PyeongBold)`
  background-color: #081435;
  color: #ffc806;
  width: fit-content;
  padding: 10px 50px;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 30px;
`;

export const IntroText = styled(Noto300)`
  color: #081435;
  font-size: 18px;
  margin-top: 50px;
`;

export default function IntroduceMain() {
  const animation = batch(Fade(), Sticky(), MoveOut(0, -200), MoveIn(0, -200));
  return (
    <>
      <IntroWrapper>
        <SubHeading>세계인과 함께하는, 대한민국 대표 야시장</SubHeading>
        <Desc>여러분과 함께 만들어가는 夜한 테마파크!</Desc>
      </IntroWrapper>
      <Base snap="mandatory">
        <ScrollPage>
          <Animator
            animation={animation}
          >
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={animation}
          >
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/over_img1.jpg?raw=true" />
            <IntroTitle>
              2016년 6월에 개장한 총거리 약 350M 대형 야시장
            </IntroTitle>
            <IntroText>
              우리나라 3대 시장인 서문시장의 밤거리를 무대로 하여
              <br />총 80대의 매대에서 다양한 먹거리, 살거리를 판매하며 매일
              저녁, 시민과 관광객에게 즐거움을 선사하는 복합문화공간입니다.
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={animation}
          >
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/over_img2.jpg?raw=true" />
            <IntroTitle>먹거리 • 볼거리 • 즐길거리</IntroTitle>
            <IntroText>
              특히, 먹거리 일색인 타 야시장과는 달리 먹거리, 볼거리, 즐길거리의
              3대 요소가 연중으로 펼쳐지는 마법같은 관광지이기도 합니다.
              <br />
              향후에는 대구 최대의 관광명소가 될 수 있도록 택배시스템,
              사후면세점 제도, 복합쇼핑 COMPLEX 조성 등 다양한 계획을 진행 할
              예정입니다.
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={animation}
          >
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/over_img3.jpg?raw=true" />
            <IntroTitle>대구의 자랑거리 !</IntroTitle>
            <IntroText>
              서문시장 야시장은 대구의 밤문화와 다양한 첨단, 문화예술이 복합되어
              어디서도 찾을 수 없는 경험을 제 공합니다. <br />
              글로벌, 퓨전 먹거리를 비롯하여 대구에서만 찾을 수 있는 독특한
              음식, 우리의 추억과 감성을 자극하는 다양한 볼거리,살거리가
              즐비합니다.
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={animation}
          >
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/over_img5.jpg?raw=true" />
            <IntroTitle>창업상단 육성 !</IntroTitle>
            <IntroText>
              서문시장 야시장은 새로운 창업인큐베이터로써의 기능도 수행합니다.
              <br />
              안정적인 공간에서 보다 차별화된 육성시스템을 기반으로 새로운
              상인이 탄생하고, 성공창업자로 독립할 수 있도록 ‘시장인큐베이터’로
              최선을 다하고 있습니다.
              <br />
              <br />
              서문시장 야시장은 전통시장이 젊은이들을 위한 새로운 삶의 터전이 될
              수 있는 ‘획기적인’ 모델을 제시하고 있습니다.
            </IntroText>
          </Animator>
        </ScrollPage>
      </Base>
    </>
  );
}
