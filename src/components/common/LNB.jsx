import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Base = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 5px #08143555;
  padding: 0 200px;
  position: sticky;
  top: 70px;
  z-index: 9999;
  @media screen and (max-width: 1600px) {
    padding: 0 150px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
    height: 40px;
  }
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  @media screen and (max-width: 600px) {
    line-height: 40px;
  }
  & > li {
    width: 250px;
    font-size: 18px;
    font-family: "PyeongChangPeace-Light";
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #ff9900;
    }
    @media screen and (max-width: 900px) {
      width: fit-content;
      font-size: 14px;
    }
  }
`;

export default function LNB({ children, location, setLocation }) {
  const onClick = (e) => {
    setLocation(e.target.id);
  };
  return (
    <Base>
      <NavList onClick={(e) => onClick(e)}>{children}</NavList>
    </Base>
  );
}
