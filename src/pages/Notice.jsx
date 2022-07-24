import React from 'react'
import styled from 'styled-components';

import Title from '../components/common/Title';
import NoticeList from '../components/NoticeList';

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;

export default function Notice() {
  return (
    <Base>
      <Title>공지사항</Title>
      <NoticeList />
    </Base>
  )
}
