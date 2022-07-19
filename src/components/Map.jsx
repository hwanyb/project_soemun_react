import React from "react";
import styled from "styled-components";
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
export default function Map() {
  return (
    <Base>
      <MapImgWapper
        href="https://map.kakao.com/?urlX=856924.0&amp;urlY=661633.0&amp;itemId=27464044&amp;q=%EC%84%9C%EB%AC%B8%EC%8B%9C%EC%9E%A5&amp;srcid=27464044&amp;map_type=TYPE_MAP&amp;from=roughmap"
        target="_blank"
      >
        <MapImg src="http://t1.daumcdn.net/roughmap/imgmap/5ad6254ae2eb392104baa4aac20dffb52266548f565faf2dedf5a9ca0544a454" />
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
          <Button
            target="_blank"
            href="https://map.kakao.com/?from=roughmap&amp;srcid=27464044&amp;confirmid=27464044&amp;q=%EC%84%9C%EB%AC%B8%EC%8B%9C%EC%9E%A5&amp;rv=on"
          >
            로드뷰
          </Button>
          <Button
            target="_blank"
            href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%84%9C%EB%AC%B8%EC%8B%9C%EC%9E%A5&amp;eX=856924.0&amp;eY=661633.0"
          >
            길찾기
          </Button>
          <Button
            target="_blank"
            href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=27464044&amp;itemId=27464044&amp;q=%EC%84%9C%EB%AC%B8%EC%8B%9C%EC%9E%A5&amp;urlX=856924.0&amp;urlY=661633.0"
          >
            지도 크게 보기
          </Button>
        </ButtonWrapper>
      </KakaoMapInfoWrapper>
    </Base>
  );
}
