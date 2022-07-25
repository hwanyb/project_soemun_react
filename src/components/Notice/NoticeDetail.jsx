import React from "react";
import styled from "styled-components";
import { Noto300, Noto500, Noto700 } from "../../style/Common";

const DetailBase = styled.div`
  text-align: left;
`;
const NoticeTitleWrapper = styled.div`
  padding: 0 50px;
  line-height: 50px;
  background-color: #ffc90665;
  border-bottom: 1px solid #ffc806;
  border-top: 1px solid #ffc806;
`;
const NoticeTitle = styled(Noto700)`
  font-size: 18px;
  text-align: center;
`;
const NoticeDateWrapper = styled.div`
  display: flex;
  padding: 10px 50px;
font-size: 14px;
`;
const Label = styled(Noto500)`
  margin-right: 10px;
`;
const NoticeDate = styled(Noto300)``;
const NoticeBodyWrapper = styled.div`
  padding: 50px;
  border-bottom: 1px solid #ffc806;
  border-top: 1px solid #ffc806;
  `;
  const NoticeBody = styled(Noto500)``;

export default function NoticeDetail({ selectedPost, setMainView }) {
  return (
    <DetailBase>
      <NoticeTitleWrapper>
      <NoticeTitle>{selectedPost.title}</NoticeTitle>
        
      </NoticeTitleWrapper>
      <NoticeDateWrapper>
        <Label>등록일</Label>
        <NoticeDate>{selectedPost.date}</NoticeDate>
      </NoticeDateWrapper>
      <NoticeBodyWrapper>

      <NoticeBody style={{ whiteSpace: "pre" }}>{selectedPost.body}</NoticeBody>
      </NoticeBodyWrapper>
    </DetailBase>
  );
}
