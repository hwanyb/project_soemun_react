import React from "react";

export default function NoticeDetail({ selectedPost, setMainView }) {
  return (
    <>
    <button onClick={() => setMainView('list')}>글 목록</button>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.date}</p>
      <p style={{ whiteSpace: "pre" }}>{selectedPost.body}</p>
    </>
  );
}
