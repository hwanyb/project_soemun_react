import React, { useEffect, useState } from 'react';

import NoticeList from "./NoticeList";
import NoticeWriting from "./NoticeWriting";
import Subtitle from "../common/Subtitle";
import NoticeDetail from './NoticeDetail';
import styled from 'styled-components';

const Base = styled.div`

max-width: 1600px;
  padding: 0 200px 150px 200px;
  margin: 0 auto;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

const NoticeBtn = styled.button`
  background-color: #ffc806;
  color: #081435;
  &:hover {
    background-color: #ff9900;
    font-weight: 700;
  }
  &:last-child {
    margin-left: 10px;
  }
`;

export default function NoticeContent() {
  const getList = JSON.parse(localStorage.getItem("noticeArr"));
  const [mainView, setMainView] = useState('list');
  const [noticeList, setNoticeList] = useState(getList);
  const [selectedPost, setSelectedPost] = useState(null);
  
  useEffect(() => {
    setNoticeList(getList);
  }, [mainView]);

  const onWriteClick = () => {
    setMainView("writing");
  };
  
  const onListClick = () => {
    setMainView("list");
  };
  const ListBtn = () => {
    return (
      <NoticeBtn onClick={onListClick}>글 목록</NoticeBtn>
    )
  };
  const WritingBtn = () => {
    return (
      <NoticeBtn onClick={onWriteClick}>글 작성</NoticeBtn>
    )
  };

  const Content = () => {
    switch(mainView) {
        case 'list':
            return (
              <>
                <Subtitle>공지사항 목록</Subtitle>
                <BtnWrapper>
                  <WritingBtn />
                </BtnWrapper>
                <NoticeList
                  noticeList={noticeList}
                  setSelectedPost={setSelectedPost}
                  setMainView={setMainView}
                />
              </>
            );
        case 'writing':
            return (
              <>
                <Subtitle>공지사항 글 작성</Subtitle>
                <BtnWrapper>
                  <ListBtn />
                </BtnWrapper>
                <NoticeWriting setMainView={setMainView} noticeList={noticeList} />
              </>
            );
        case 'detail' :
            return (
              <>
                <Subtitle>공지사항 글 확인</Subtitle>
                <BtnWrapper>
                  <WritingBtn />
                  <ListBtn />
                </BtnWrapper>
                <NoticeDetail
                  selectedPost={selectedPost}
                  setMainView={setMainView}
                />
              </>
            );
        default:
            return <>loading...</>
    }
  }
return (
    <Base>
        <Content />
    </Base>
);
}
