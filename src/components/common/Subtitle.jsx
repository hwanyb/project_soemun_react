import React from "react";
import styled from "styled-components";
import { PyeongBold } from "../../style/Common";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  @media screen and (max-width: 900px) {
    margin: 80px 0;
  }
  @media screen and (max-width: 600px) {
    margin: 50px 0;
  }
`;
const Background = styled.div`
  & > svg {
    width: 400px;
    @media screen and (max-width: 900px) {
      width: 350px;
    }
    @media screen and (max-width: 600px) {
      width: 250px;
    }
  }
`;
const SubtitleText = styled(PyeongBold)`
  font-size: 30px;
  color: #081435;
  position: absolute;
  @media screen and (max-width: 900px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
export default function Subtitle({ children }) {
  return (
    <Base>
      <Background>
        <svg
          viewBox="0 0 377 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M161.757 74.8454L161.13 74.3407L160.503 74.8454C153.388 80.5728 144.345 84 134.5 84C111.58 84 93 65.4198 93 42.5C93 19.5802 111.58 1 134.5 1C144.345 1 153.388 4.42722 160.503 10.1546L161.13 10.6593L161.757 10.1546C168.872 4.42722 177.914 1 187.76 1C197.605 1 206.647 4.42716 213.762 10.1544L214.389 10.6591L215.016 10.1544C222.131 4.42716 231.174 1 241.019 1C263.939 1 282.519 19.5802 282.519 42.5C282.519 65.4198 263.939 84 241.019 84C231.174 84 222.131 80.5728 215.016 74.8456L214.389 74.3409L213.762 74.8456C206.647 80.5728 197.605 84 187.76 84C177.914 84 168.872 80.5728 161.757 74.8454ZM187.76 0C177.678 0 168.416 3.5104 161.13 9.37557C153.844 3.5104 144.582 0 134.5 0C111.028 0 92 19.0279 92 42.5C92 65.9721 111.028 85 134.5 85C144.582 85 153.844 81.4896 161.13 75.6244C168.416 81.4896 177.678 85 187.76 85C197.841 85 207.103 81.4897 214.389 75.6246C221.676 81.4897 230.937 85 241.019 85C264.491 85 283.519 65.9721 283.519 42.5C283.519 19.0279 264.491 0 241.019 0C230.937 0 221.676 3.51034 214.389 9.37541C207.103 3.51034 197.841 0 187.76 0ZM0 42.5C11.5 42.5 11.5 20 11.5 20C11.5 20 11.5 42.5 23 42.5C11.5 42.5 11.5 65 11.5 65C11.5 65 11.5 42.5 0 42.5ZM354 42.5C365.5 42.5 365.5 20 365.5 20C365.5 20 365.5 42.5 377 42.5C365.5 42.5 365.5 65 365.5 65C365.5 65 365.5 42.5 354 42.5Z"
            fill="#FFC806"
          />
        </svg>
      </Background>
      <SubtitleText>{children}</SubtitleText>
    </Base>
  );
}
