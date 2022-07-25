import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../components/common/Title";
import Subtitle from "../components/common/Subtitle";
import NoticeDetail from "../components/Notice/NoticeDetail";
import NoticeList from "../components/Notice/NoticeList";
import NoticeWriting from "../components/Notice/NoticeWriting";

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
      <Subtitle>
        {isWriting
          ? "공지 작성"
          : selectedPost !== null
          ? "공지 글보기"
          : "공지 목록"}
      </Subtitle>

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
