import React from "react";
import styled from "styled-components";
import { Noto300, Noto500, Noto700 } from "../../style/Common";

const DetailBase = styled.div`
  text-align: left;
`;
const NoticeTitleWrapper = styled.div`
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
  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
`;
const Label = styled(Noto500)`
  margin-right: 10px;
  color: #081435;
`;
const NoticeDate = styled(Noto300)`
  color: #081435;
`;
const NoticeBodyWrapper = styled.div`
  padding: 50px;
  border-bottom: 1px solid #ffc806;
  border-top: 1px solid #ffc806;
  color: #081435;
  @media screen and (max-width: 1200px) {
    padding: 50px 10px;
  }
`;
const NoticeBody = styled(Noto500)`
  color: #081435;
  font-size: 14px;
  white-space: pre-wrap;
`;

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
        <NoticeBody>{selectedPost.body}</NoticeBody>
      </NoticeBodyWrapper>
    </DetailBase>
  );
}
