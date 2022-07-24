import React from "react";
import SubTitle from './common/Subtitle';

export default function NoticeDetail({ selectedPost, setSelectedPost }) {
  const onListClick = () => {
    setSelectedPost(null);
  };
  return (
    <>
    <SubTitle>게시글</SubTitle>
      <div onClick={onListClick}>목록</div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.date}</p>
      <p style={{ whiteSpace: "pre" }}>{selectedPost.body}</p>
    </>
  );
}
