import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Base = styled.div`
    background-color: #fff;
    width: 100%;
    height: 50px;
    box-shadow: 1px 1px 5px #08143555;;
    padding: 0 200px;
    position: sticky;
    top: 70px;
    z-index: 9999;
`;
const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    &>li{
    max-width: 200px;
    /* font-family: ${(props) => props.id === props.location ? 'PyeongChangPeace-Bold' : 'PyeongChangPeace-Light'}; */
    font-size: 18px;
    color: #081435;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover { 
        color: #FF9900;

    }
    ${props => props.id === props.location ? css`
        color: red;
    ` : css`
        color: aqua;
    `}
    }
`;

export default function LNB({ children }) {
  const [location, setLocation] = useState('main');
    const onClick = (e) => {
        setLocation(e.target.id);
      }
      useEffect(() => {
        console.log(location);
      }, [location])
  return (
    <Base>
        <NavList onClick={(e) => onClick(e)} location={location}>{ children }</NavList>
    </Base>
  )
}
