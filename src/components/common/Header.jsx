import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ArtSchool from '../../pages/ArtSchool';
import Food from '../../pages/Food';
import Introduce from '../../pages/Introduce';
import Notice from '../../pages/Notice';
import { PyeongBold, PyeongLight } from '../../style/Common';

const Base = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #0A1124;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 99999;
  top: 0;
  padding: 0 200px;
`;
const LogoWrapper = styled.div``;
const StyledLink = styled(Link)`
    text-decoration: none;
    box-sizing: border-box;
`;
const HeaderNav = styled.nav`
    display: flex;
`;
const LogoTitle = styled(PyeongBold)`
    color: #FFC806;
    font-size: 30px;
`;
const NavItem = styled(PyeongLight)`
    color: #fff;
    font-size: 14px;
`;

export default function Header() {
  return (
    <Base>
      <LogoWrapper>
        <StyledLink to="/">
          {/* <LogoImg src="https://hwanyb.github.io/project_seomun/img/Artboard%203.png" alt="header_logo" /> */}
          <LogoTitle>서문시장 야시장</LogoTitle>
        </StyledLink>
      </LogoWrapper>
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
