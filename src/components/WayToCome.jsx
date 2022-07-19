import React from "react";

export default function WayToCome() {
  return (
    <Base>
      <MapWrppaer>
        <Map></Map>
      </MapWrppaer>
      <InfoWrapper>
        <MainInfo className="flex">
          <InfoTitleWrapper>
            <InfoTitle>
              <TitleIcon>location_on</TitleIcon>
              주소
            </InfoTitle>
            <InfoTitle>
              <TitleIcon>call</TitleIcon>
              전화
            </InfoTitle>
          </InfoTitleWrapper>
          <InfoTextWapper>
            <InfoText>대구 중구 큰장로26길 45</InfoText>
            <InfoText>053-256-6341</InfoText>
          </InfoTextWapper>
        </MainInfo>
        <SubwayInfo>
          <InfoTitle>
            <TitleIcon>subway</TitleIcon>
            주변 지하철
          </InfoTitle>
          <InfoTextWapper className="flex">
            <SubwayWapper className="flex">
              <SubwayLine>3</SubwayLine>
              <InfoText>서문시장역</InfoText>
            </SubwayWapper>
            <SubwayWapper className="flex">
              <SubwayLine>3</SubwayLine>
              <InfoText>신남역</InfoText>
            </SubwayWapper>
          </InfoTextWapper>
          <InfoTextWapper className="flex">
            <SubwayWapper className="flex">
              <SubwayLine id="3">3</SubwayLine>
              <InfoText>서문시장역</InfoText>
            </SubwayWapper>
            <SubwayWapper className="flex">
              <SubwayLine id="3">3</SubwayLine>
              <InfoText>청라언덕역</InfoText>
            </SubwayWapper>
            <SubwayWapper className="flex">
              <SubwayLine id="2">2</SubwayLine>
              <InfoText>청라언덕역</InfoText>
            </SubwayWapper>
            <SubwayWapper className="flex">
              <SubwayLine id="3">3</SubwayLine>
              <InfoText>달성공원역</InfoText>
            </SubwayWapper>
          </InfoTextWapper>
        </SubwayInfo>
        <BusInfo>
          <IntoTitle>
            <TitleIcon>subway</TitleIcon>
            주변 정류장
          </IntoTitle>
        </BusInfo>
      </InfoWrapper>
    </Base>
  );
}
