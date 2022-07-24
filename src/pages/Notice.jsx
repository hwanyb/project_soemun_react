import React, { useState } from 'react'
import styled from 'styled-components';

import Title from '../components/common/Title';
import NoticeDetail from '../components/NoticeDetail';
import NoticeList from '../components/NoticeList';

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;

export default function Notice() {
  const [selectedPost, setSelectedPost] = useState(null);
  console.log(selectedPost)

  return (
    <Base>
      <Title>공지사항</Title>
      {
        selectedPost !== null ? (
          <NoticeDetail selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
          ) : (
          <NoticeList setSelectedPost={setSelectedPost} />
        )
      }
    </Base>
  )
}
