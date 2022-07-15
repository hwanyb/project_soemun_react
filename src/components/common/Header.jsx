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
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    box-sizing: border-box;
`;
const HeaderNav = styled.nav`
    display: flex;
`;
const LogoTitle = styled(PyeongBold)`
    color: #081435;
    font-size: 30px;
`;
const NavItem = styled(PyeongLight)`
    color: #081435;
    font-size: 14px;
    margin-left: 30px;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #FF9900;
    }
`;

export default function Header() {
  return (
    <Base>
        <StyledLink to="/">
          {/* <LogoImg src="https://hwanyb.github.io/project_seomun/img/Artboard%203.png" alt="header_logo" /> */}
          <LogoTitle>서문시장 야시장</LogoTitle>
        </StyledLink>
      <HeaderNav>
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
      </HeaderNav>
    </Base>
  );
}
