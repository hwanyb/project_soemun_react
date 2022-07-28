import React from "react";
import styled from "styled-components";
import { PyeongBold, PyeongLight } from "../../style/Common";
import Background from "./Background";

const Base = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #081435;
  justify-content: center;
`;
const TextWrapper = styled.div`
  position: absolute;
`;
const Text = styled(PyeongBold)`
  font-size: 40px;
  color: #ffc806;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
const CurrentNav = styled(PyeongLight)`
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export default function Title({ children }) {
  return (
    <Base>
      <Background />
      <TextWrapper>
        <Text>서문시장 야시장</Text>
        <CurrentNav>— {children} —</CurrentNav>
      </TextWrapper>
    </Base>
  );
}
