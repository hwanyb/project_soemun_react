import React, { useEffect, useState } from 'react';

import NoticeList from "./NoticeList";
import NoticeWriting from "./NoticeWriting";
import Subtitle from "../common/Subtitle";
import NoticeDetail from './NoticeDetail';

export default function NoticeContent() {
  const getList = JSON.parse(localStorage.getItem("noticeArr"));
  const [mainView, setMainView] = useState('');
  const [noticeList, setNoticeList] = useState(getList);
  const [selectedPost, setSelectedPost] = useState(null);
  
  useEffect(() => {
    setMainView('list');
  }, [])
    console.log(mainView);

  const onWriteClick = () => {
    setMainView("writing");
  };
  
  const onListClick = () => {
    setMainView("list");
  };
  const ListBtn = () => {
    return (
      <button onClick={onListClick}>글 목록</button>
    )
  };
  const WritingBtn = () => {
    return (
      <button onClick={onWriteClick}>글 작성</button>
    )
  };

  const Content = () => {
    switch(mainView) {
        case 'list':
            return (
              <>
                <Subtitle>공지사항 목록</Subtitle>
                <NoticeList noticeList={noticeList} setSelectedPost={setSelectedPost} setMainView={setMainView}  />
              </>
            );
        case 'writing':
            return (
              <>
                <Subtitle>공지사항 글 작성</Subtitle>
                <ListBtn />
                <NoticeWriting setMainView={setMainView} noticeList={noticeList} />
              </>
            );
        case 'detail' :
            return (
              <>
                <Subtitle>공지사항 글 확인</Subtitle>
                <ListBtn />
                <NoticeDetail selectedPost={selectedPost} setMainView={setMainView} />
              </>
            );
        default:
            return <>loading...</>
    }
  }
return (
    <>
        <Content></Content>
    </>
);
}
