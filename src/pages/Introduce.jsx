import React, { useState } from "react";
import styled from "styled-components";

import LNB from "../components/common/LNB";
import Subtitle from "../components/common/Subtitle";
import Title from "../components/common/Title";
import IntroduceMain from "../components/Introduce/IntroduceMain";
import OperatingTime from "../components/Introduce/OperatingTime";
import WayToCome from "../components/Introduce/WayToCome";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
  padding-bottom: 80px;
`;
const ContentWrapper = styled.div`
  padding: 0 200px;
`;

const LNBLi = styled.li`
  color: ${(props) => (props.active ? "#FF9900" : "#081435")};
`;

export default function Introduce() {
  const [location, setLocation] = useState("main");

  return (
    <Base>
      <Title>소개</Title>
      <LNB location={location} setLocation={setLocation}>
        <LNBLi id="main" active={location === "main"}>
          서문시장 야시장 소개
        </LNBLi>
        <LNBLi id="time" active={location === "time"}>
          운영시간
        </LNBLi>
        <LNBLi id="way" active={location === "way"}>
          오시는 길
        </LNBLi>
      </LNB>
      <Subtitle>
        {location === "main"
          ? "서문시장 야시장 소개"
          : location === "time"
          ? "운영시간"
          : "오시는 길"}
      </Subtitle>
      <ContentWrapper>
        {location === "main" ? (
          <IntroduceMain />
        ) : location === "time" ? (
          <OperatingTime />
        ) : (
          <WayToCome />
        )}
      </ContentWrapper>
    </Base>
  );
}
