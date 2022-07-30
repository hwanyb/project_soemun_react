import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Noto300 } from "../../style/Common";

const Base = styled.aside`
  position: fixed;
  top: 150px;
  left: -5px;
  background-color: #ffc806;
  padding: 30px 10px;
  border-radius: 0 20px 20px 0;
  z-index: 999999;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const NavItem = styled(Link)`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ItemText = styled(Noto300)`
  text-align: center;
  margin-top: 5px;
  font-size: 11px;
  color: #081435;
`;
const NavIcon = styled(Icon)`
  &:hover {
    background-color: #081435;
    color: #ffc806;
  }
`;

export default function SNB() {
  return (
    <Base>
      <NavItem to="/">
        <NavIcon className="material-symbols-rounded">home</NavIcon>
        <ItemText>홈</ItemText>
      </NavItem>
      <NavItem to="/introduce">
        <NavIcon className="material-symbols-rounded">schedule</NavIcon>
        <ItemText>운영시간</ItemText>
      </NavItem>
      <NavItem to="/introduce">
        <NavIcon className="material-symbols-rounded">map</NavIcon>
        <ItemText>오시는길</ItemText>
      </NavItem>
      <NavItem to="/notice">
        <NavIcon className="material-symbols-rounded">campaign</NavIcon>
        <ItemText>공지사항</ItemText>
      </NavItem>
    </Base>
  );
}
