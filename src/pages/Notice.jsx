import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../components/common/Title";
// import NoticeDetail from "../components/Notice/NoticeDetail";
// import NoticeList from "../components/Notice/NoticeList";
// import NoticeWriting from "../components/Notice/NoticeWriting";
import NoticeContent from "../components/Notice/NoticeContent";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;

export default function Notice() {
  // const [isWriting, setIsWriting] = useState(false);
  // const [isShowDetail, setIsShowDetail] = useState(false);
  // const [noticeList, setNoticeList] = useState([]);
  // const [selectedPost, setSelectedPost] = useState(null);
  // const getList = JSON.parse(localStorage.getItem("noticeArr"));
  // useEffect(() => {
  //   setNoticeList(getList);
  //   console.log(noticeList);
  // }, [isWriting]);
  // useEffect(() => {
  //   console.log(selectedPost);
  // });

  return (
    <Base>
      <Title>공지사항</Title>
      <NoticeContent />

      {/* {isWriting ? (
        <NoticeWriting setIsWriting={setIsWriting} noticeList={noticeList} />
      ) : selectedPost !== null ? (
        <>
          <button onClick={onWriteClick}>글 작성</button>
          <NoticeDetail selectedPost={selectedPost} onListClick={onListClick} />
        </>
      ) : (
        
      )}
      {
        mainView === "list" ? (
          <>
          <button onClick={onWriteClick}>글 작성</button>
          <NoticeList noticeList={noticeList} onPostClick={onPostClick} />
        </>
        ): mainView ===
      } */}
    </Base>
  );
}
