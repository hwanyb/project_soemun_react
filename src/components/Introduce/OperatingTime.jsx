import React from "react";
import styled from "styled-components";
import { Noto700, Noto900, PyeongBold } from "../../style/Common";

const Base = styled.div`
  margin-bottom: 80px;
`;
const BoxWrapper = styled.div`
  display: flex;
  padding: 20px 50px;
  border-top: 1px solid #ffc806;
  border-bottom: 1px solid #ffc806;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;
const Box = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  &:first-child {
    border-right: 1px solid #ffc806;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    &:first-child {
      border-right: none;
      border-bottom: 1px solid #ffc90660;
    }
  }
`;
const Month = styled(Noto900)`
  font-size: 24px;
  color: #ff9900;
  margin-right: 30px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const DayWrapper = styled.div`
  text-align: left;
  margin-right: 10px;
`;
const Day = styled(Noto700)`
  font-size: 18px;
  line-height: 24px;
  color: #ffc806;
  &:first-child {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  line-height: 18px;
  }
`;
const TimeWapper = styled.div``;
const Time = styled(Noto700)`
  line-height: 24px;
  color: #081435;
  font-size: 18px;
  &:first-child {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  line-height: 18px;
  }
`;
const Caution = styled(PyeongBold)`
  font-size: 24px;
  color: red;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export default function OperatingTime() {
  return (
    <Base>
      <BoxWrapper>
        <Box>
          <Month>3월 ~ 11월</Month>
          <DayWrapper>
            <Day>일 ~ 목</Day>
            <Day>금, 토</Day>
          </DayWrapper>
          <TimeWapper>
            <Time>19:00 ~ 22:30</Time>
            <Time>19:00 ~ 23:30</Time>
          </TimeWapper>
        </Box>
        <Box>
          <Month>12월 ~ 2월</Month>
          <DayWrapper>
            <Day>일 ~ 목</Day>
            <Day>금, 토</Day>
          </DayWrapper>
          <TimeWapper>
            <Time>19:00 ~ 21:30</Time>
            <Time>19:00 ~ 22:00</Time>
          </TimeWapper>
        </Box>
      </BoxWrapper>
      <Caution>※ 매주 화요일은 정기휴무입니다. ※</Caution>
    </Base>
  );
}
