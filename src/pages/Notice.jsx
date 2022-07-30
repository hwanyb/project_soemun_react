import React from "react";
import styled from "styled-components";

import Title from "../components/common/Title";
import NoticeContent from "../components/Notice/NoticeContent";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
  padding-bottom: 100px;
`;

export default function Notice() {
  return (
    <Base>
      <Title>공지사항</Title>
      <NoticeContent />
    </Base>
  );
}
