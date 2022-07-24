import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { noticeArr } from "../assets/data";

import Title from "../components/common/Title";
import NoticeDetail from "../components/NoticeDetail";
import NoticeList from "../components/NoticeList";
import NoticeWriting from "../components/NoticeWriting";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;

export default function Notice() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isWriting, setIsWriting] = useState(false);
  const [noticeList, setNoticeList] = useState([]);

  const getList = JSON.parse(localStorage.getItem("noticeArr"));
  useEffect(() => {
    setNoticeList(getList);
    console.log(noticeList);
  }, [isWriting]);

  return (
    <Base>
      <Title>공지사항</Title>
      {isWriting ? (
        <NoticeWriting
          setIsWriting={setIsWriting}
          noticeList={noticeList}
          setNoticeList={setNoticeList}
        />
      ) : selectedPost !== null ? (
        <>
          <button onClick={() => setIsWriting(true)}>글 작성</button>
          <NoticeDetail
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
          />
        </>
      ) : (
        <>
          <button onClick={() => setIsWriting(true)}>글 작성</button>
          <NoticeList
            setSelectedPost={setSelectedPost}
            noticeList={[...noticeList]}
          />
        </>
      )}
    </Base>
  );
}
