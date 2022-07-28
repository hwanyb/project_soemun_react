import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PyeongBold, PyeongLight } from '../../style/Common';

const Base = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #ffc806;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 99999;
  top: 0;
  padding: 0 200px;
  align-items: center;
  box-shadow: 1px 1px 5px #0814352f;;
  @media screen and (max-width: 1600px) {
    padding: 0 150px;
    
  }
  @media screen and (max-width: 1200px) {
    padding: 0 100px;
    
  }
  @media screen and (max-width: 900px) {
    padding: 10px 50px;
    flex-direction: column;

  }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    box-sizing: border-box;
`;
const GNB = styled.nav`
    display: flex;
`;
const LogoTitle = styled(PyeongBold)`
    color: #081435;
    font-size: 30px;
    @media screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
const NavItem = styled(PyeongLight)`
    color: #081435;
    font-size: 18px;
    margin-left: 30px;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #FF9900;
    }
    @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export default function Header() {
  return (
    <Base>
        <StyledLink to="/">
          <LogoTitle>서문시장 야시장</LogoTitle>
        </StyledLink>
      <GNB>
        <StyledLink to="/introduce">
          <NavItem>소개</NavItem>
        </StyledLink>
        <StyledLink to="/food">
          <NavItem>먹거리</NavItem>
        </StyledLink>
        <StyledLink to="artschool">
          <NavItem>거리예술학교</NavItem>
        </StyledLink>
        <StyledLink to="notice">
          <NavItem>공지사항</NavItem>
        </StyledLink>
      </GNB>
    </Base>
  );
}
