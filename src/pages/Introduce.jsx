import React, { useState } from "react";
import styled from "styled-components";
import LNB from "../components/common/LNB";
import Subtitle from "../components/common/Subtitle";
import Title from "../components/common/Title";
import IntroduceMain from "../components/IntroduceMain";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;
const ContentWrapper = styled.div`
  padding: 0 200px;
`;

export default function Introduce() {
  return (
    <Base>
      <Title>소개</Title>
      <LNB>
        <li id="main">서문시장 야시장 소개</li>
        <li id="time">운영시간</li>
        <li id="way">오시는 길</li>
      </LNB>
      <Subtitle>서문시장 야시장 소개</Subtitle>
      <ContentWrapper>
        <IntroduceMain></IntroduceMain>
      </ContentWrapper>
    </Base>
  );
}
