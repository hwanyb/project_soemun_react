import React from "react";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
import {
  Base,
  Desc,
  IntroImg,
  IntroText,
  IntroTitle,
  IntroWrapper,
  SubHeading,
} from "./Introduce/IntroduceMain";

export default function ArtSchoolContent() {
  const animation = batch(MoveIn(0, -500), MoveOut(0, -500));
  return (
    <>
      <IntroWrapper>
        <SubHeading>서문야시장의 또 하나의 즐거움, 거리예술학교!</SubHeading>
        <Desc>
          대구 서문시장 야시장은 볼거리와 즐길거리도 가득하답니다.
          <br />
          맛있는 음식을 손에 들고 이리 저리 자유롭게 구경하면서 즐겨보세요. 그
          무엇을 보더라도 즐거움이 가득한 밤이 당신을 기다립니다!
        </Desc>
      </IntroWrapper>
      <Base>
        <ScrollPage>
          <Animator animation={animation}>
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/school1.jpg?raw=true" />
            <IntroTitle>다양한 공연</IntroTitle>
            <IntroText>
              서문시장 야시장의 공연은 조금 색다릅니다.
              <br />
              시끌벅적한 시장이라는 장소가 주는 분위기에, 후각을 자극하는 다양한
              먹거리가 흥을 돋습니다.
              <br />
              거기에 다양한 예술공연이 밤늦도록 펼쳐지니 걷고, 먹고, 음악을
              들으며 시간을 보내기에는 더없이 좋답니다 !
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={animation}>
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/school2.jpg?raw=true" />
            <IntroTitle>미디어파사드</IntroTitle>
            <IntroText>
              미디어파사드란, 미디어(media)와 건물의 외벽을
              뜻하는파사드(facade)의 합성어로 건물의 외벽에 다양한 콘텐츠 영상을
              투사하는 첨단 예술입니다.
              <br />
              서문시장 주차타워 벽면을 빔에서 쏘아져나오는 화려하고 다이나믹한
              서문 야시장의 미디어파사드를 놓치지 마세요.
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={animation}>
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/school3.jpg?raw=true" />
            <IntroTitle>인터랙티브 미디어아트</IntroTitle>
            <IntroText>
              맛있는 음식을 맛보기 위해선 기다림은 필수!
              <br />
              그런 당신의 머리 위로 야시장 매대를 한층 밝혀주는 미디어아트가
              있습니다.
              <br />
              불꽃축제를 연상시키는 미디어아트, 그 화려함에 빠질 수 있으니
              주의하세요!
              <br />
              천막 하나에도 영상의 아름다움을 느낄 수 있는 서문시장 야시장! 역시
              남다르죠?
            </IntroText>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={animation}>
            <IntroImg src="https://github.com/hwanyb/project_seomun/blob/master/img/school4.jpg?raw=true" />
            <IntroTitle>포토존</IntroTitle>
            <IntroText>
              350M에 달하는 매대의 끝에는 야시장 공식 포토존이 자리하고
              있습니다.
              <br />
              먹고 즐기는 야시장 투어의 완성은 뭐다? 바로 인증샷이죠!
              <br />
              서문 야시장의 포토존은 3호선 모노레일을 상징하는 모습입니다.
              <br />
              이곳에서 잠시 쉬며 서문 야시장 마스코트도 만나 인생 셀카도 남기고
              가세요!
            </IntroText>
          </Animator>
        </ScrollPage>
      </Base>
    </>
  );
}
