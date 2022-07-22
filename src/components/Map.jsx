import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mapArr } from "../assets/data";
const Base = styled.div`
  width: 100%;
  position: relative;
`;
const MapImgWapper = styled.a`
  display: block;
`;
const MapImg = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 5px;
`;

const KakaoMapInfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 10px;
  line-height: 20px;
`;
const KakaoMapLogo = styled.a`
  & > img {
    display: block;
    width: 72px;
    height: 16px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const Button = styled.a`
  font-size: 11px;
  margin-right: 10px;
  color: #081435;
  border-radius: 10px;
  background-color: #ffffff9d;
  padding: 2px 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #ffffff;
  }
`;
export default function Map(props) {
  const [mapInfo, setMapInfo] = useState({});
  useEffect(() => {
    let mapObj = mapArr.filter((v) => v.name === props.name);
    setMapInfo(mapObj[0]);
  }, []);
  return (
    <Base>
      <MapImgWapper href={mapInfo.mapUrl} target="_blank">
        <MapImg src={mapInfo.mapImgUrl} />
      </MapImgWapper>
      <KakaoMapInfoWrapper>
        <KakaoMapLogo href="https://map.kakao.com" target="_blank">
          <img
            src="http://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
            width="72"
            height="16"
            alt="카카오맵"
          />
        </KakaoMapLogo>
        <ButtonWrapper>
          <Button target="_blank" href={mapInfo.loadViewUrl}>
            로드뷰
          </Button>
          <Button target="_blank" href={mapInfo.mapUrl}>
            지도 크게 보기
          </Button>
        </ButtonWrapper>
      </KakaoMapInfoWrapper>
    </Base>
  );
}
