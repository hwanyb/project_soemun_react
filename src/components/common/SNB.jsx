import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Noto300 } from '../../style/Common';

const Base = styled.aside`
    position: fixed;
    top: 150px;
    left: -5px;
    background-color: #ffc806;
    padding: 30px 10px;
    border-radius: 0 20px 20px 0;
    z-index: 999999;
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

export default function SNB() {
  return (
    <Base>
        <NavItem to='/'>
            <Icon className='material-symbols-rounded'>home</Icon>
            <ItemText>홈</ItemText>
        </NavItem>
        <NavItem to='/introduce'>
            <Icon className='material-symbols-rounded'>schedule</Icon>
            <ItemText>운영시간</ItemText>
        </NavItem>
        <NavItem to='/introduce'>
            <Icon className='material-symbols-rounded'>map</Icon>
            <ItemText>오시는길</ItemText>
        </NavItem>
        <NavItem to='/notice'>
            <Icon className='material-symbols-rounded'>campaign</Icon>
            <ItemText>공지사항</ItemText>
        </NavItem>
    </Base>
  )
}
